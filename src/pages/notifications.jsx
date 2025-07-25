import React, { useState } from 'react';
import "../styles/notifications.css";
import NotificationItem from '../components/notificationItem/notificationItem';
import formatTime from '../utils/formatTime';

const Notifications = ({getNewNotice}) => {
	const [notices, setNotices] = useState([
		{id: 1, author: "Анна", type: "comment", postId: "1", postName: "Рассвет", date: "2025-05-20T08:00:00.00", src: "/images/ava-person.jpg"},
		{id: 2, author: "Максим", type: "like", postId: "2", postName: "Рассвет", date: "2025-05-20T10:40:00.00", src: "/images/ava.jpg"},
		{id: 3, author: "Авлоаыифпшоуфрщпфрщф", type: "subscribe", authorId: 1, date: "2020-01-01T08:00:00.00", src: "/images/ava.jpg"},
		{id: 4, author: "fsafds", type: "like", postId: "3", postName: "Рассвет", date: "2025-05-20T21:29:40.00", src: "/images/ava-person.jpg"}
	]);

	return (
		<main className="notifications">
			<section className="notifications__list">
				<h1 className="notifications__title">Уведомления</h1>
				{notices.length ? notices.map((notice) => {
					const noticeDate = Date.parse(notice.date);
					const dif = Date.now() - noticeDate;
					const resultDate = formatTime(dif);
					return (
						<NotificationItem
							href={notice.type === "subscribe" ? {
								pathname: `/profile/${notice.authorId}`,
							} : notice.type === "like" ? {
								pathname: `/post/${notice.postId}`,
							} : notice.type === "comment" ? {
								pathname: `/post/${notice.postId}`,
							} : {}}
							author={notice.author}
							noticeType={notice.type}
							date={resultDate}
							avatar={notice.src}
							key={notice.id}
							postName={notice?.postName}
						/>
					)
				})
				: <h2 className="notifications__subtitle">Новых уведомлений нет</h2>}
			</section>
		</main>
	)
}

export default Notifications;