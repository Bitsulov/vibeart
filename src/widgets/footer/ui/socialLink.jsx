import React from 'react';
import classes from "./socialLink.module.css";
import { Link } from 'react-router-dom';

const SocialLink = ({data, ...props}) => {
	const Img = data.img;

	return (
		<Link target="_blank" className={classes.socialsLink} to={data.href} {...props}>
			<Img />
		</Link>
	)
}

export default SocialLink;