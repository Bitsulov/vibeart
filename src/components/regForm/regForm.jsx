import React from 'react';
import classes from "./regForm.module.css";
import InputForm from '../inputForm/inputForm';

const RegForm = ({errorState=false, errorText, onSubmit, emailInputProps={}, passwordInputProps={}, passwordAgainInputProps={}, ...props}) => {
	return (
		<section className={classes.authentication}>
			<h2 className={classes.authentication__title}>Зарегистрироваться</h2>
			<form className={classes.authentication__form} onSubmit={onSubmit} method="post" action="/" {...props}>
				<InputForm
					id="emailAuthentication"
					type="email"
					placeholder={emailInputProps.placeholder}
					value={emailInputProps.value}
					onChange={e => emailInputProps.onChange(e)}
					required
				/>
				<InputForm
					className={errorState ? classes.errorInput : ""}
					id="passwordAuthentication"
					type="password"
					placeholder={passwordInputProps.placeholder}
					minLength={6}
					value={passwordInputProps.value ?? ""}
					onChange={e => passwordInputProps.onChange(e)}
					required 
				/>
				<InputForm
					className={errorState ? classes.errorInput : ""}
					id="passwordAgainAuthentication"
					type="password"
					placeholder={passwordAgainInputProps.placeholder}
					minLength={6}
					value={passwordAgainInputProps.value ?? ""}
					onChange={e => passwordAgainInputProps.onChange(e)}
					required
				/>
				<p className={errorState ? classes.authentication__errorText : `${classes.authentication__errorText} ${classes.hide}`}>{errorText}</p>
				<button className={classes.authentication__submit} type="submit">Отправить</button>
			</form>
		</section>
	)
}

export default RegForm;