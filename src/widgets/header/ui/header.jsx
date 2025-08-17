import React, { useState } from 'react';
import classes from "./header.module.css";
import logoBlack from "../../../shared/icons/logo-black.png";
import Burger from '../burger/burger';
import { Link } from 'react-router-dom';
import { HeaderForm } from '../../../features/headerForm';
import { HeaderNavigationDesktop } from '../../../features/headerNavigationDesktop';

const Header = () => {
	return (
		<header>
			<Link className={classes.header__logo} to={"/gallery"}>
				<img src={logoBlack} alt="logo" className={classes.header__logoImg}></img>
				<span className={classes.header__title}>VibeArt</span>
			</Link>
			<HeaderForm />
			<HeaderNavigationDesktop />
			<Burger />
		</header>
	)
}

export default Header;