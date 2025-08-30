import React, { useEffect, useRef } from 'react';
import classes from "./burger.module.css";
import { toggleBurgerHandler } from '../model/toggleBurgerHandler';
import { useDispatch, useSelector } from 'react-redux';
import { selectBURGEROPENLINKSHEIGHT, selectBurgerLinksHeight, selectIsBurgerOpen } from '../model/selectors';
import { setBurgerOpenLinksHeight, setBurgerLinksHeight } from '../model/BurgerSlice';
import { navigationBurgerClickHandler } from '../model/navigationBurgerClickHandler';
import { BurgerNavigationList } from '../../burgerNavigationList';
import { useBurgerNavigationOptions } from '../config/useBurgerNavigationOptions';

const Burger = ({options, ...props}) => {
	const isBurgerOpen = useSelector(selectIsBurgerOpen);
	const burgerLinksHeight = useSelector(selectBurgerLinksHeight);
	const BURGEROPENLINKSHEIGHT = useSelector(selectBURGEROPENLINKSHEIGHT);
	const burgerMenuRef = useRef(null);

	const optionsRes = useBurgerNavigationOptions();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setBurgerOpenLinksHeight(burgerMenuRef.current.scrollHeight));
		dispatch(setBurgerLinksHeight(0));
	}, [])

	return (
		<div
			className={isBurgerOpen ? `${classes.header__burger} ${classes.header__burgerActive}` : classes.header__burger}
			onClick={e => toggleBurgerHandler(e, dispatch, burgerLinksHeight, BURGEROPENLINKSHEIGHT)}
			{...props}
		>
			<div className={classes.burgerEl}></div>
			<div className={classes.burgerEl}></div>
			<div className={classes.burgerEl}></div>
			<nav
				style={BURGEROPENLINKSHEIGHT === null ? {} : {height: burgerLinksHeight + "px"}}
				className={classes.burger__links}
				ref={burgerMenuRef}
				onClick={navigationBurgerClickHandler}
			>
				<BurgerNavigationList options={optionsRes} />
			</nav>
		</div>
	)
}

export { Burger };