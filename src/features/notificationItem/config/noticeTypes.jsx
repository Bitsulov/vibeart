import classes from "../ui/notificationItem.module.css";

export const noticeTypes = {
	comment: ({authorName, postName}) => (
		<>
			Пользователь <span className={classes.bold}>{authorName}</span> оставил комментарий к посту <span className={classes.link}>{postName}</span>
		</>
	),
	answerComment: ({authorName, postName}) => (
		<>
			Пользователь <span className={classes.bold}>{authorName}</span> ответил на ваш комментарий к посту <span className={classes.link}>{postName}</span>
		</>
	),
	like: ({authorName, postName}) => (
		<>
			Пользователь <span className={classes.bold}>{authorName}</span> лайкнул ваш пост <span className={classes.link}>{postName}</span>
		</>
	),
	subscribe: ({authorName, postName}) => (
		<>
			Пользователь <span className={classes.bold}>{authorName}</span> подписался на вас
		</>
	),
	system: ({authorName, postName}) => (
		<>
			Системное уведомление
		</>
	)
}
