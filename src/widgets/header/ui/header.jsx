import React from 'react';
import classes from "./header.module.css";
import logoBlack from "shared/icons/logo-black.png";
import { Burger } from 'features/burger';
import { Link } from 'react-router-dom';
import { HeaderForm } from 'features/headerForm';
import { HeaderNavigationDesktop } from 'features/headerNavigationDesktop';
import { selectUserInfo } from 'entities/user/model/selectors';
import { useSelector } from 'react-redux';

const Header = () => {
	const userInfo = useSelector(selectUserInfo);

	return (
		<header>
			<Link className={classes.header__logo} to="/gallery">
				<img src={logoBlack} alt="logo" className={classes.header__logoImg}></img>
				<span className={classes.header__title}>VibeArt</span>
			</Link>
			<HeaderForm />
			<HeaderNavigationDesktop avatar={userInfo.srcImg} userId={userInfo.id} />
			<Burger />
		</header>
	)
}

export { Header };
