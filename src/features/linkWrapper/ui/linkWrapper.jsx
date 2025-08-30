import React from 'react';
import classes from "./linkWrapper.module.css";
import { Link } from 'react-router-dom';

const LinkWrapper = ({href, children, className, ...props}) => {
	return (
		<>
			{href ?
				<Link to={href} className={className} {...props}>{children}</Link>
			:
				<div className={`${classes.resetActivity} ${className}`} {...props}>{children}</div>
			}
		</>
	)
}

export { LinkWrapper };
