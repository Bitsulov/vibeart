import React from 'react';
import classes from "./about.module.css";
import { InDevelopment } from 'widgets/inDevelopment';
import { Layout } from "widgets/layout";

const About = () => {
	return (
		<Layout>
			<main className={classes.about}>
				<InDevelopment />
			</main>
		</Layout>
	)
}

export { About };
