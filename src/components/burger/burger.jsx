import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from "./burger.module.css";

const Burger = ({options, ...props}) => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const [burgerLinksHeight, setBurgerLinksHeight] = useState(null);
	const [BURGEROPENLINKSHEIGHT, setBurgerOpenLinksHeight] = useState(null);
	const burgerMenuRef = useRef(null);

	useEffect(() => {
		setBurgerOpenLinksHeight(burgerMenuRef.current.scrollHeight);
		setBurgerLinksHeight(0);
	}, [])

	const toggleBurger = () => {
		if(!burgerLinksHeight || burgerLinksHeight === "0px") {
			setIsBurgerOpen(true);
			setBurgerLinksHeight(BURGEROPENLINKSHEIGHT);
		} else {
			setIsBurgerOpen(false);
			setBurgerLinksHeight(0);
		}
	}

	return (
		<div
			className={isBurgerOpen ? `${classes.header__burger} ${classes.header__burgerActive}` : classes.header__burger}
			onClick={toggleBurger}
			{...props}
		>
			<div className={classes.burgerEl}></div>
			<div className={classes.burgerEl}></div>
			<div className={classes.burgerEl}></div>
			<nav
				style={BURGEROPENLINKSHEIGHT === null ? {} : {height: burgerLinksHeight + "px"}}
				className={classes.burger__links}
				ref={burgerMenuRef}
				onClick={(e) => {e.stopPropagation()}}
			>
				{options.map((option, index) => (
					<Link to={option.href} className={classes.burger__link} key={index + 1}>
						{option.haveCounter ? 
							<span className={classes.burgerNoticeLen}>{option.counter}</span>
							: ""
						}
						{option.text}
					</Link>
				))}
			</nav>
		</div>
	)
}

export default Burger;