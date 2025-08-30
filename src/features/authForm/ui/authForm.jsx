import React from 'react';
import classes from "./authForm.module.css";
import { useSelector, useDispatch } from 'react-redux';
import useSubmitSign from '../model/useSubmitSign';
import { emailChangeHandler } from '../model/emailChangeHandler';
import { passwordChangeHandler } from '../model/passwordChangeHandler';
import { InputForm } from '../../inputForm';

const AuthForm = () => {
	const emailValueSign = useSelector(state => state.auth.emailValueSign);
	const passwordValueSign = useSelector(state => state.auth.passwordValueSign);
	const emailSignError = useSelector(state => state.auth.emailSignError);
	const passwordSignError = useSelector(state => state.auth.passwordSignError);
	const errorText = useSelector(state => state.auth.errorText);

	const dispatch = useDispatch();

	const { submitSign } = useSubmitSign();

	return (
		<section className={classes.authentication}>
			<h2 className={classes.authentication__title}>Войти</h2>
			<form className={classes.authentication__form} onSubmit={submitSign}>
				<InputForm
					id="emailAuthentication"
					type="email"
					placeholder="Email"
					placeholderClassName={emailSignError ? classes.errorPlaceholder : ""}
					value={emailValueSign}
					onChange={(e) => emailChangeHandler(e, dispatch)}
					className={emailSignError ? classes.errorInput : ""}
				/>
				<InputForm
					id="passwordAuthentication"
					type="password"
					placeholder="Пароль"
					placeholderClassName={passwordSignError ? classes.errorPlaceholder : ""}
					minLength={6}
					value={passwordValueSign}
					onChange={(e) => passwordChangeHandler(e, dispatch)}
					className={passwordSignError ? classes.errorInputLeft : ""}
				/>
				<p className={errorText ? `${classes.authentication__error} ${classes.show}` : classes.authentication__error}>{errorText}</p>
				<button className={classes.authentication__submit} type="submit">Отправить</button>
			</form>
		</section>
	)
}

export { AuthForm };
