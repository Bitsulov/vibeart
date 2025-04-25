import React from 'react';
import "../styles/notifications.css";
import InDevelopment from '../components/inDevelopment/inDevelopment';

const Notifications = ({setNoticeText, getNewNotice}) => {
	return (
		<main>
			<InDevelopment />
		</main>
	)
}

export default Notifications;