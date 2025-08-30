import React from 'react';
import classes from "./regForm.module.css";
import { useSelector, useDispatch } from 'react-redux';
import useSubmitReg from '../model/useSubmitReg';
import { emailChangeHandler } from '../model/emailChangeHandler';
import { passwordChangeHandler } from '../model/passwordChangeHandler';
import { passwordAgainChangeHandler } from '../model/passwordAgainChangeHandler';
import { InputForm } from '../../inputForm';

const RegForm = () => {
	const emailValueReg = useSelector(state => state.reg.emailValueReg);
	const passwordValueReg = useSelector(state => state.reg.passwordValueReg);
	const passwordAgainValueReg = useSelector(state => state.reg.passwordAgainValueReg);
	const emailRegError = useSelector(state => state.reg.emailRegError);
	const passwordRegError = useSelector(state => state.reg.passwordRegError);
	const passwordAgainRegError = useSelector(state => state.reg.passwordAgainRegError);
	const errorText = useSelector(state => state.reg.errorText);

	const { submitReg } = useSubmitReg();

	const dispatch = useDispatch();

	return (
		<section className={classes.authentication}>
			<h2 className={classes.authentication__title}>Зарегистрироваться</h2>
			<form className={classes.authentication__form} onSubmit={submitReg}>
				<InputForm
					id="emailAuthentication"
					type="email"
					placeholder="Email"
					placeholderClassName={emailRegError ? classes.errorPlaceholder : ""}
					value={emailValueReg}
					onChange={e => emailChangeHandler(e, dispatch)}
					className={emailRegError ? classes.errorInput : ""}
				/>
				<InputForm
					id="passwordAuthentication"
					type="password"
					placeholder="Пароль"
					placeholderClassName={passwordRegError ? classes.errorPlaceholder : ""}
					minLength={6}
					value={passwordValueReg}
					onChange={e => passwordChangeHandler(e, dispatch)}
					className={passwordRegError ? classes.errorInputLeft : ""}
				/>
				<InputForm
					id="passwordAgainAuthentication"
					type="password"
					placeholder="Повторите пароль"
					placeholderClassName={passwordAgainRegError ? classes.errorPlaceholder : ""}
					minLength={6}
					value={passwordAgainValueReg}
					onChange={e => passwordAgainChangeHandler(e, dispatch)}
					className={passwordAgainRegError ? classes.errorInputLeft : ""}
				/>
				<p className={errorText ? `${classes.authentication__error} ${classes.show}` : classes.authentication__error}>{errorText}</p>
				<button className={classes.authentication__submit} type="submit">Отправить</button>
			</form>
		</section>
	)
}

export { RegForm };
