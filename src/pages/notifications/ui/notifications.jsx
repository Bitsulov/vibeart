import React from 'react';
import classes from "./notifications.module.css";
import { PageTitle } from "widgets/pageTitle";
import { NotificationsList } from 'widgets/notificationsList';
import { Layout } from "widgets/layout";
import { noticesMock } from 'entities/notification';

const Notifications = () => {
	return (
		<Layout>
			<main className={classes.notifications}>
				<PageTitle title="Уведомления" />
				<NotificationsList noticesList={noticesMock} />
			</main>
		</Layout>
	)
}

export { Notifications };
