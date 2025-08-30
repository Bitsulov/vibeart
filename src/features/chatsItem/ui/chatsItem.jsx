import React, { useEffect, useState } from 'react';
import classes from "./chatsItem.module.css";
import { Link } from 'react-router-dom';
import { formatTime } from "shared/lib/formatTime";

const ChatsItem = ({name, href, srcImg, alt, lastMessage, date, ...props}) => {
	const [resultDate, setResultDate] = useState(0);

	useEffect(() => {
		const chatDate = Date.parse(date);
		const timeAgo = formatTime(Date.now(), chatDate);
		setResultDate(timeAgo);
	}, [date]);

	return (
		<Link to={href} className={classes.chats__item} {...props}>
			<img src={srcImg} alt={name} className={classes.chats__itemAvatar}></img>
			<div className={classes.chats__itemInfo}>
				<p className={classes.chats__itemName}>{name}</p>
				<p className={classes.chats__itemLastMessage}>{lastMessage}</p>
			</div>
			<span className={classes.chats__itemTime}>{resultDate}</span>
		</Link>
	)
}

export default ChatsItem;
