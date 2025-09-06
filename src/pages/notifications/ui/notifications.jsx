import React from 'react';
import classes from "./notifications.module.css";
import { PageTitle } from "widgets/pageTitle";
import { NotificationsList } from 'widgets/notificationsList';
import { Layout } from "widgets/layout";
import { noticesMock } from 'entities/notification';
import { useLoadPageStatus } from 'entities/pageStats/hooks/useLoadPageStatus';

const Notifications = () => {
	const isPageLoaded = useLoadPageStatus();

	return (
		<Layout pageStatus={isPageLoaded}>
			<main className={classes.notifications}>
				<PageTitle title="Уведомления" />
				<NotificationsList noticesList={noticesMock} />
			</main>
		</Layout>
	)
}

export { Notifications };
