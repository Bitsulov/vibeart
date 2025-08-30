import React from 'react';
import classes from "./pageTitle.module.css";

const PageTitle = ({title, ...props}) => {
	return <h1 className={classes.messages__title} {...props}>{title}</h1>
}

export { PageTitle };
