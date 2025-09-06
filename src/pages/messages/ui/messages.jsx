import React from 'react';
import classes from "./messages.module.css";
import { Layout } from "widgets/Layout";
import { ChatList } from 'widgets/chatList';
import { PageTitle } from 'widgets/pageTitle';
import { chatsMock } from 'entities/chats/const/mockConst';
import { useLoadPageStatus } from 'entities/pageStats/hooks/useLoadPageStatus';

const Messages = () => {
	const isPageLoaded = useLoadPageStatus();

	return (
		<Layout pageStatus={isPageLoaded}>
			<main className={classes.messages}>
				<PageTitle title="Сообщения" />
				<ChatList list={chatsMock}/>
			</main>
		</Layout>
	)
}

export { Messages };
