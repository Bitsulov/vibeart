import React from 'react';
import classes from "./errorInfo.module.css";

const ErrorInfo = ({status, message, ...props}) => {
	return (
		<div className={classes.error__inner} {...props}>
			<h1 className={classes.error__title}>Произошла ошибка с кодом {status}</h1>
			<p className={classes.error__text}>
				{message}
			</p>
		</div>
	)
}

export default ErrorInfo;