import React from 'react';
import classes from "./home.module.css";
import { AuthModal } from 'widgets/authModal';
import { WelcomeMain } from 'widgets/welcomeMain';
import { Layout } from 'widgets/layout';
import { useLoadPageStatus } from 'entities/pageStats/hooks/useLoadPageStatus';

const Home = () => {
	const isPageLoaded = useLoadPageStatus();

	return (
		<Layout pageStatus={isPageLoaded}>
			<main className={classes.home}>
				<AuthModal />
				<WelcomeMain />
			</main>
		</Layout>
	)
}

export { Home };