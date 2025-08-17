import React from 'react';
import classes from "./regButton.module.css";
import { regButtonHandler } from '../model/regButtonHandler';

const RegButton = ({...props}) => {
	return (
		<button
			className={classes.regButton}
			onClick={regButtonHandler}
			{...props}
		>
			Регистрация
		</button>
	)
}

export default RegButton;