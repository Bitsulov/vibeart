import React from 'react';
import classes from "./layout.module.css";
import { Header } from "../../header";
import { Footer } from "../../footer";
import { LoaderPage } from '../../LoaderPage';
import { Notice } from 'features/notice/ui/notice';

const Layout = ({children, pageStatus}) => {
	return (
		<div className={classes.layout}>
			<LoaderPage pageStatus={pageStatus} />
			<Notice />
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export { Layout };
