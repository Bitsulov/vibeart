import React from 'react';
import classes from "./error.module.css";
import { useGetErrorCode } from '../hooks/useGetErrorCode';
import { getErrorMessage } from '../lib/getErrorMessage';
import { Layout } from "widgets/layout";
import { ErrorInfo } from 'widgets/errorInfo';

const Error = () => {
	const status = useGetErrorCode();
	const message = getErrorMessage(status);

	return (
		<Layout>
			<main className={classes.error}>
				<ErrorInfo status={status} message={message} />
			</main>
		</Layout>
	)
}

export { Error };