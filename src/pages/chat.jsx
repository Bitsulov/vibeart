import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/chat.css";
import { monthesRu } from '../utils/monthesRu';
import MessageItem from '../components/messageItem/messageItem';

const Chat = ({getNewNotice}) => {
	const [userId, setUserId] = useState(1);
	const [name, setName] = useState("Анна Иванова");
	const [isOnline, setIsOnline] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([
		{id: 0, type: "incoming", text: "Привет! Как дела?", time: "2020-06-20T18:42:00.00Z"},
		{id: 1, type: "incoming", text: "Привет! Как дела?", time: "2020-06-20T18:42:00.00Z"},
		{id: 10, type: "incoming", text: "Привет! Как дела?", time: "2025-06-20T18:42:00.00Z"},
		{id: 9, type: "incoming", text: "Привет! Как дела?", time: "2025-06-21T18:42:00.00Z"},
		{id: 2, type: "outgoing", status: "read", text: "Привет! Всё отлично, работаю над новой иллюстрацией 😊", time: "2025-06-21T08:42:00.00Z"},
		{id: 3, type: "incoming", text: "Привет! Как дела?", time: "2025-06-21T09:00:00.00Z"},
		{id: 4, type: "incoming", text: "Привет! Как дела?", time: "2025-06-21T21:42:00.00Z"},
		{id: 5, type: "outgoing", status: "read", text: "Привет! Всё отлично, работаю над новой иллюстрацией 😊", time: "2025-06-22T21:42:00.00Z"},
		{id: 6, type: "outgoing", status: "read", text: "Привет! Всё отлично, работаю над новой иллюстрацией 😊", time: "2025-06-23T21:42:00.00Z"},
		{id: 7, type: "incoming", text: "Привет! Как дела?", time: "2025-06-24T21:42:00.00Z"},
		{id: 8, type: "outgoing", status: "unread", text: "Привет! Всё отлично, работаю над новой иллюстрацией 😊", time: "2025-06-25T21:42:00.00Z"},
	]);

	const messagesEnd = useRef(null);
	const chat = useRef(null);

	useEffect(() => {
		setCurrentDate(new Date());
		messagesEnd.current?.scrollIntoView();
	}, [messages]);

	const sendMessage = e => {
		e.preventDefault();
		if(inputValue.trim() !== "") {
			setMessages([...messages, {
				id: Date.now(),
				type: "outgoing",
				status: "unread",
				text: inputValue,
				time: new Date().toISOString(),
				new: true /* Не отправлять в БД */
			}]);
			setInputValue("");
			chat.current.classList.add("new-message-anim");
			setTimeout(() => {
				chat.current.classList.remove("new-message-anim");
			}, 150);
	}}

	return (
		<main className="chat">
			<div className="chat__container">
				<div className="chat__header">
					<div className="chat__user">
						<Link to={`/profile/${userId}`}>
							<img src="/images/ava-person.jpg" alt="Аватар" className="chat__user-avatar"></img>
						</Link>
						<div>
							<Link to={`/profile/${userId}`}>
								<h2>{name}</h2>
							</Link>
							<span className={isOnline ? "chat__user-online-status online" : "chat__user-online-status"}>{isOnline ? "В сети" : "Не в сети"}</span>
						</div>
					</div>
					<button className="chat__user-options">...</button>
				</div>
				<div className="chat__messages" ref={chat}>
					{messages.length > 0 ?
						messages.map((message, i) => {
							const messageDate = new Date(message.time);
							const messageTime = `${String(messageDate.getHours()).padStart(2, "0")}:${String(messageDate.getMinutes()).padStart(2, "0")}`;
							const prevMessageDate = i > 0 ? new Date(messages[i - 1].time) : null;
							let dateText;
							const difDays = currentDate.getDate() - messageDate.getDate();
							const isThisMonth = messageDate.getMonth() === currentDate.getMonth();
							const isThisYear = messageDate.getFullYear() === currentDate.getFullYear();
							if(!isThisYear) {
								dateText = `${messageDate.getDate()} ${monthesRu[messageDate.getMonth() + 1]} ${messageDate.getFullYear()}`;
							} else if(difDays === 0 && isThisMonth) {
								dateText = "Сегодня";
							} else if(difDays === 1 && isThisMonth) {
								dateText = "Вчера";
							} else {
								dateText = `${messageDate.getDate()} ${monthesRu[messageDate.getMonth() + 1]}`;
							}
							const showDate = ((prevMessageDate === null) || ((messageDate.getDate() - prevMessageDate.getDate()) !== 0) || (messageDate.getFullYear() !== prevMessageDate.getFullYear()));
							return (
								<div key={message.id} className="chat__message-wrapper" style={i === 0 ? {marginTop: "auto"} : {}}>
									<div style={i === 0 ? {marginTop: 0} : {}} className={showDate ? "chat__message-br" : "chat__message-br hide"}>{dateText}</div>
									<MessageItem isNew={message.new} text={message.text} time={messageTime} type={message.type} status={message?.status} />
								</div>
							)
						})
						: <h1 className="chat__messages-title">Вы еще не писали сообщения этому пользователю.</h1>
					}
					<div className="chat__messages-end" ref={messagesEnd}></div>
				</div>
				<form
					className="chat__form"
					onSubmit={sendMessage}
				>
					<input
						className='chat__form-input'
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						type="text"
						placeholder="Напишите сообщение..."
					></input>
					<input
						type='submit'
						value=""
						className="chat__form-send"
					></input>
				</form>
			</div>
		</main>
	)
}

export default Chat;