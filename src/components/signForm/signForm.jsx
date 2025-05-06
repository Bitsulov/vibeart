import React from 'react';
import classes from "./signForm.module.css";
import InputForm from '../inputForm/inputForm';

const SignForm = ({errorState=false, errorText, onSubmit, emailInputProps={}, passwordInputProps={}, ...props}) => {
	return (
		<section className={classes.authentication}>
			<h2 className={classes.authentication__title}>Войти</h2>
			<form className={classes.authentication__form} onSubmit={onSubmit} method="post" action="/" {...props}>
				<InputForm
					className={errorState ? classes.errorInput : ""}
					id="emailAuthentication"
					type="email"
					placeholder={emailInputProps.placeholder}
					minLength={6}
					value={emailInputProps.value ?? ""}
					onChange={e => {emailInputProps.onChange(e)}}
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
				<p className={errorState ? classes.authentication__errorText : 	`${classes.authentication__errorText} ${classes.hide}`}>{errorText}</p>
				<button className={classes.authentication__submit} type="submit">Отправить</button>
			</form>
		</section>
	)
}

export default SignForm;