import React, { useEffect } from 'react';
import classes from "./notificationItem.module.css";
import { LinkWrapper } from 'features/linkWrapper';
import { noticeTypes } from '../config/noticeTypes.jsx';
import { hrefTypes } from '../config/hrefTypes';

const NotificationItem = ({authorName, authorId, noticeType, date, srcImg, href, postName, postId, ...props}) => {
	return (
		<LinkWrapper href={hrefTypes[noticeType]({authorId, postId})} className={classes.notification__item} {...props}>
			<img src={srcImg} alt="Аватар" className={classes.notification__avatar}></img>
			<div className={classes.notification__content}>
				<p className={classes.notification__text}>
					{noticeTypes[noticeType]({authorName, postName})}
				</p>
				<p className={classes.notification__date}>{date}</p>
			</div>
		</LinkWrapper>
	)
}

export { NotificationItem };
