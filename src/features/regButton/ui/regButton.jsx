import React from 'react';
import classes from "./regButton.module.css";
import { regButtonHandler } from '../model/regButtonHandler';
import { useDispatch } from "react-redux";

const RegButton = ({...props}) => {
	const dispatch = useDispatch();

	return (
		<button
			className={classes.regButton}
			onClick={e => regButtonHandler(e, dispatch)}
			{...props}
		>
			Регистрация
		</button>
	)
}

export { RegButton };