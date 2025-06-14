import React from 'react';
import classes from "./notificationsItem.module.css";
import { Link } from 'react-router-dom';

const NotificationItem = ({author, noticeType, date, avatar, href, ...props}) => {
	const noticeTypes = {
		comment: `оставил комментарий к посту`,
		answerComment: `ответил на ваш комментарий к посту`,

		like: `лайкнул ваш пост`,

		subscribe: `подписался на вас`,
	}

	return (
		<Link to={href} className={classes.notification__item}>
			<img src={avatar} alt="Аватар" className={classes.notification__avatar}></img>
			<div className={classes.notification__content}>
				<p className={classes.notification__text}>
					Пользователь <span className={classes.bold}>{author}</span> {noticeTypes[noticeType]} {props.postName ? <span className={classes.link}>"{props.postName}"</span> : ""}
				</p>
				<p className={classes.notification__date}>{date}</p>
			</div>
		</Link>
	)
}

export default NotificationItem;