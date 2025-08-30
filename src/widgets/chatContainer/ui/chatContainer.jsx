import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from "./chatContainer.module.css";
import { MessageItem } from 'features/messageItem';
import { formatTime2Nums } from 'shared/lib/formatTime2Nums';
import { formatDate } from 'shared/lib/formatDate';
import { checkShowDate } from '../helpers/checkShowDate';
import { useScrollTo } from 'shared/hooks/useScrollTo';
import { ChatForm } from 'features/chatForm';
import { sendMessageHandler } from '../model/sendMessageHandler';
import { ChatSettingsButton } from "features/chatSettingsButton";

const ChatContainer = ({messages, setMessages, userInfo, ...props}) => {
	const [inputValue, setInputValue] = useState("");
	const messagesEnd = useRef(null);
	const chat = useRef(null);

	useScrollTo(messagesEnd, [messages]);

	return (
		<div className={classes.chat__container} {...props}>
			<div className={classes.chat__header}>
				<div className={classes.chat__user}>
					<Link to={`/profile/${userInfo.id}`}>
						<img src={userInfo.srcImg} alt="Аватар" className={classes.chat__userAvatar}></img>
					</Link>
					<div className={classes.chat__userInfo}>
						<Link to={`/profile/${userInfo.id}`} className={classes.chat__userName}>
							<h2>{`${userInfo.firstName} ${userInfo.secondName}`}</h2>
						</Link>
						{userInfo.status === "online" ? 
							<span className={`${classes.chat__userOnlineStatus} ${classes.online}`}>В сети</span>
						:
							<span className={classes.chat__userOnlineStatus}>Не в сети</span>
						}
					</div>
				</div>
				<ChatSettingsButton />
			</div>
			<div className={classes.chat__messages} ref={chat}>
				{messages.length > 0 ?
					messages.map((message, i) => {
						const messageDate = new Date(message.time);
						const prevMessageDate = i > 0 ? new Date(messages[i - 1].time) : null;

						const messageTime = formatTime2Nums(messageDate);
						const dateText = formatDate(messageDate);
						const showDate = checkShowDate(messageDate, prevMessageDate);
						return (
							<div key={message.id} className={classes.chat__messageWrapper} style={i === 0 ? {marginTop: "auto"} : {}}>
								<div style={i === 0 ? {marginTop: 0} : {}} className={showDate ? classes.chat__messageBr : `${classes.chat__messageBr} ${classes.hide}`}>{dateText}</div>
								<MessageItem isNew={message.new} text={message.text} time={messageTime} type={message.type} status={message?.status} />
							</div>
						)
					})
				: <h1 className={classes.chat__messagesTitle}>Вы еще не писали сообщения этому пользователю.</h1>
				}
				<div className={classes.chat__messagesEnd} ref={messagesEnd}></div>
			</div>
			<ChatForm
				inputValue={inputValue}
				setInputValue={setInputValue}
				onSubmit={e => sendMessageHandler(e, inputValue, setInputValue, messages, setMessages, chat)}
			/>
		</div>
	)
}

export { ChatContainer };
