import React from 'react';
import "../styles/about.css";
import InDevelopment from '../components/inDevelopment/inDevelopment';

const About = ({setNoticeText, setGotNotice}) => {
	return (
		<main>
			<InDevelopment />
		</main>
	)
}

export default About;