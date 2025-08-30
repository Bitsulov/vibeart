import React from 'react';
import classes from "./authButton.module.css";
import { authButtonHandler } from '../model/authButtonHandler';
import { useDispatch } from 'react-redux';

const AuthButton = ({...props}) => {
	const dispatch = useDispatch();

	return (
		<button
			className={classes.authButton}
			onClick={e => authButtonHandler(e, dispatch)}
			{...props}
		>
			Войти
		</button>
	)
}

export { AuthButton };
