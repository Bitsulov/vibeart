import React from 'react';
import classes from "./loader.module.css";

const Loader = ({ref, show=true, ...props}) => {
	return (
		<div ref={ref} className={classes.loader__background} style={show ? {display: "flex"} : {display: "none"}}>
			<div className={classes.loader} {...props}></div>
		</div>
	)
}

export default Loader;