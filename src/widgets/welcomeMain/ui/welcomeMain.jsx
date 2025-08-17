import React from 'react';
import classes from "./welcomeMain.module.css";
import { AuthButton } from '../../../features/authButton';
import { RegButton } from '../../../features/regButton';

const WelcomeMain = () => {
	return (
		<section className={classes.welcome}>
			<h1 className={classes.welcome__title}>Добро пожаловать в VibeArt</h1>
			<p className={classes.welcome__description}>Место для художников: делись своими работами и находи вдохновение вместе с нами.</p>
			<div className={classes.welcome__buttons}>
				<AuthButton />
				<RegButton />
			</div>
		</section>
	)
}

export default WelcomeMain;