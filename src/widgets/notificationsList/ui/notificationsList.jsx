import React from 'react';
import classes from "./notificationsList.module.css";
import { formatTime } from "shared/lib/formatTime";
import { NotificationItem } from 'features/notificationItem';

const NotificationsList = ({noticesList, ...props}) => {
	return (
		<section className={classes.notifications__list} {...props}>
			{noticesList.length ?
				noticesList.map(notice => {
					const noticeDate = Date.parse(notice.date);
					const resultDate = formatTime(Date.now(), noticeDate);
					return (
						<NotificationItem
							authorName={notice.authorName}
							authorId={notice?.authorId}
							noticeType={notice.noticeType}
							date={resultDate}
							srcImg={notice.srcImg}
							key={`notice${notice.id}`}
							postName={notice?.postName}
							postId={notice?.postId}
						/>
					)
				}
			) : <h2 className={classes.notifications__subtitle}>Новых уведомлений нет</h2>}
		</section>
	)
}

export { NotificationsList };
