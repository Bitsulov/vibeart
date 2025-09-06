import React, { useEffect, useState } from 'react';
import classes from "./loaderPage.module.css";
import { useLocation } from 'react-router-dom';

const LoaderPage = ({pageStatus, ...props}) => {
	const [isVisible, setIsVisible] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setIsVisible(true);
		if(pageStatus) {
			const timer = setTimeout(() => {
				setIsVisible(false);
			}, 300);
			return () => clearTimeout(timer);
		}
	}, [location.pathname, pageStatus]);

	return (
		<section className={`${classes.loader} ${isVisible ? classes.show : classes.hide}`}>
			<div className={classes.loader__round} {...props}></div>
		</section>
	)
}

export { LoaderPage };
