import React from 'react';
import classes from "./home.module.css";
import { AuthModal } from '../../../widgets/authModal';
import { WelcomeMain } from '../../../widgets/welcomeMain';
import { Layout } from '../../../widgets/layout';

const Home = () => {
	return (
		<Layout>
			<main className={classes.home}>
				<AuthModal />
				<WelcomeMain />
			</main>
		</Layout>
	)
}

export default Home;