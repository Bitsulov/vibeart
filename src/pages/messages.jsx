import React, { useState } from 'react';
import "../styles/messages.css";
import ChatsItem from '../components/ChatsItem/ChatsItem';
import formatTime from '../utils/formatTime';

const Messages = ({getNewNotice}) => {
	const [chats, setChats] = useState([
		{name: "Анна Рисует", chatId: 1, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Кира Мультяшка", chatId: 2, src: "/images/ava-person.jpg", lastMessage: "Галерея просто 🔥", date: "2025-01-01T12:45:00.00"},
		{name: "Чат 3", chatId: 3, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-14T04:05:06.00"},
		{name: "Чат 4", chatId: 4, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 5", chatId: 5, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 6", chatId: 6, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 7", chatId: 7, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 8", chatId: 8, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 9", chatId: 9, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 10", chatId: 10, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 11", chatId: 11, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 12", chatId: 12, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 13", chatId: 13, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 14", chatId: 14, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
		{name: "Чат 15", chatId: 15, src: "/images/ava-person.jpg", lastMessage: "Привет! Посмотри новый арт 💜", date: "2025-06-01T12:05:54.00"},
	]);
	
	return (
		<main className="messages">
			<h1 className="messages__title">Сообщения</h1>
			<section className="messages__list">
				{chats.map(chat => {
					const chatDate = Date.parse(chat.date);
					const dif = Date.now() - chatDate;
					const resultDate = formatTime(dif);
					return <ChatsItem key={chat.chatId} name={chat.name} href={`/messages/${chat.chatId}`} src={chat.src} lastMessage={chat.lastMessage} time={resultDate} />
				})}
			</section>
		</main>
	)
}

export default Messages;