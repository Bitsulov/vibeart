import React, { useEffect, useState } from 'react';
import classes from "./notice.module.css";

const Notice = ({message, newNotice=false, setNewNotice, ...props}) => {
	const [loaded, setLoaded] = useState(false);
	const [showNotice, setShowNotice] = useState(false);
	const [queue, setQueue] = useState([]);
	const [currentMessage, setCurrentMessage] = useState(message);
	const [classesNotice, setClassesNotice] = useState(classes.notice);
	
	useEffect(() => {
		setNewNotice(false);
		if(loaded) {
			queue.includes(message) ? {} : setQueue([...queue, message]);
			checkNotice();
		} else {
			setLoaded(true);
		}
	}, [newNotice])

	useEffect(() => {
		if(!showNotice && loaded) {
			checkNotice();
		}
	}, [showNotice])

	const checkNotice = () => {
		if(!showNotice) {
			if(queue.length !== 0) {
				setCurrentMessage(queue[0]);
				setQueue(queue.slice(1));
				setClassesNotice(`${classes.notice} ${classes.noticeShow}`);
				setShowNotice(true);
				setTimeout(() => {
					setClassesNotice(`${classes.notice} ${classes.noticeHide}`);
					setTimeout(() => {
						setClassesNotice(classes.notice);
						setShowNotice(false);
					}, 1000)
				}, 9000)
			} else {
				setCurrentMessage(message);
			}
		}
	}

	return (
		<div className={classesNotice} {...props}>
			<p className={classes.notice__text}>{currentMessage}</p>
		</div>
	)
}

export default Notice;