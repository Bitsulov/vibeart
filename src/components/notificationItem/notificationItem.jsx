import React from 'react';
import classes from "./notificationsItem.module.css";
import { Link } from 'react-router-dom';

const NotificationItem = ({author, noticeType, date, avatar, href, ...props}) => {
	const noticeTypes = {
		comment: `оставил комментарий к вашему посту.`,
		answerComment: `ответил на ваш комментарий`,

		like: `лайкнул вашу работу.`,

		subscribe: `подписался на вас.`,
	}

	return (
		<Link to={href} className={classes.notification__item} {...props}>
			<img src={avatar} alt="Аватар" className={classes.notification__avatar}></img>
			<div className={classes.notification__content}>
				<p className={classes.notification__text}>Пользователь <span className={classes.bold}>{author}</span> {noticeTypes[noticeType]}</p>
				<p className={classes.notification__date}>{date}</p>
			</div>
		</Link>
	)
}

export default NotificationItem;