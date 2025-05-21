import React from 'react';
import "../styles/messages.css";
import InDevelopment from '../components/inDevelopment/inDevelopment';

const Messages = ({getNewNotice}) => {
	return (
		<main>
			<InDevelopment />
		</main>
	)
}

export default Messages;