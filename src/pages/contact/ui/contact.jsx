import React from 'react';
import classes from "./contact.module.css";
import { InDevelopment } from 'widgets/inDevelopment';
import { Layout } from "widgets/layout";

const Contact = () => {
	return (
		<Layout>
			<main className={classes.contact}>
				<InDevelopment />
			</main>
		</Layout>
	)
}

export { Contact };
