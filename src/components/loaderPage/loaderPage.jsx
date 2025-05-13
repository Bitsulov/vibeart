import React, { useEffect, useState } from 'react';
import classes from "./loaderPage.module.css";

const LoaderPage = ({...props}) => {
	const [classesLoader, setClassesLoader] = useState(classes.loader);

	useEffect(() => {
		setTimeout(() => {
			setClassesLoader(`${classes.loader} ${classes.hiding}`)
			setTimeout(() => {
				setClassesLoader(`${classes.loader} ${classes.hide}`)
			}, 1000);
		}, 300);
	}, [])

	return (
		<section className={classesLoader}>
			<div className={classes.loader__round} {...props}></div>
		</section>
	)
}

export default LoaderPage;