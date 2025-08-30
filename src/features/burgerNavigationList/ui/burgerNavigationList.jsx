import React from 'react';
import classes from "./burgerNavigationList.module.css";
import { Link } from 'react-router-dom';

const BurgerNavigationList = ({options}) => {
	return (
		<>
			{options.map((option, index) => (
				<Link to={option.href} className={classes.burger__link} key={index + 1}>
					{option.haveCounter ? 
						<span className={classes.burgerNoticeLen}>{option.counter}</span>
						: ""
					}
					{option.text}
				</Link>
			))}
		</>
	)
}

export default  BurgerNavigationList;
