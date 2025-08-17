import React from 'react';
import classes from "./authButton.module.css";
import { authButtonHandler } from '../model/authButtonHandler';

const AuthButton = ({...props}) => {
	return (
		<button
			className={classes.authButton}
			onClick={authButtonHandler}
			{...props}
		>
			Войти
		</button>
	)
}

export default AuthButton;