import React from 'react';
import classes from "./chatList.module.css";
import ChatsItem from 'features/chatsItem/ui/chatsItem';

const ChatList = ({list}) => {
	console.log(list);
	return (
		<section className={classes.messages__list}>
			{list.map(chat => {
				return <ChatsItem key={chat.id} name={chat.title} href={`/messages/${chat.id}`} srcImg={chat.srcImg} lastMessage={chat.lastMessage} date={chat.date} />
			})}
		</section>
	)
}

export { ChatList };
