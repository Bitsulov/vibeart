import React from 'react';
import "../styles/messages.css";
import InDevelopment from '../components/inDevelopment/inDevelopment';

const Messages = ({setNoticeText, setGotNotice}) => {
	return (
		<main>
			<InDevelopment />
		</main>
	)
}

export default Messages;