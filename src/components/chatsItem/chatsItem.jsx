import React from 'react';
import classes from "./chatsItem.module.css";
import { Link } from 'react-router-dom';

const ChatsItem = ({name, href, src, alt, lastMessage, time, ...props}) => {
	return (
		<Link to={href} className={classes.chats__item} {...props}>
			<img src={src} alt={alt ?? "user avatar"} className={classes.chats__itemAvatar}></img>
			<div className={classes.chats__itemInfo}>
				<p className={classes.chats__itemName}>{name}</p>
				<p className={classes.chats__itemLastMessage}>{lastMessage}</p>
			</div>
			<span className={classes.chats__itemTime}>{time}</span>
		</Link>
	)
}

export default ChatsItem;