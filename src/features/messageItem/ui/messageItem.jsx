import React from 'react';
import classes from "./messageItem.module.css";

const MessageItem = ({text, type, status, time, isNew, ...props}) => {
	const showMark = type === "outgoing" && status === "unread";

	return (
		<div className={isNew ? `${classes.message} ${classes[type]} ${classes.new}` : `${classes.message} ${classes[type]}`} {...props}>
			<p>{text}</p>
			<span className={classes.time}>{time}</span>
			{showMark && <div className={classes.mark}></div>}
		</div>
	)
}

export { MessageItem };
