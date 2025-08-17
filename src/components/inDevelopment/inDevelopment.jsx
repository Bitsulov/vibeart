import React from 'react';
import classes from "./inDevelopment.module.css";

const InDevelopment = () => {
	return (
		<section className={classes.inDevelopment}>
			<h1 className={classes.inDevelopment__title}>Упс...</h1>
			<p className={classes.inDevelopment__text}>
				Эта страница находится в разработке
			</p>
		</section>
	)
}

export default InDevelopment;