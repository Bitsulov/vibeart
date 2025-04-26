import React from 'react';
import "../styles/notifications.css";
import InDevelopment from '../components/inDevelopment/inDevelopment';

const Notifications = ({getNewNotice}) => {
	return (
		<main>
			<InDevelopment />
		</main>
	)
}

export default Notifications;