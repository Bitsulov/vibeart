import React, { useState } from 'react';
import classes from "./chat.module.css";
import { userChatMock } from 'entities/user/const/mockConst';
import { chatMessagesMock } from 'entities/message';
import { ChatContainer } from 'widgets/chatContainer';
import { Layout } from "widgets/layout";

const Chat = () => {
	const [messages, setMessages] = useState(chatMessagesMock);

	return (
		<Layout>
			<main className={classes.chat}>
				<ChatContainer messages={messages} setMessages={setMessages} userInfo={userChatMock} />
			</main>
		</Layout>
	)
}

export { Chat };
