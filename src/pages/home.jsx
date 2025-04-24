import React from 'react';
import "../styles/home.css";
import InDevelopment from '../components/inDevelopment/inDevelopment';

const Home = ({setNoticeText, setGotNotice}) => {
	return (
		<main>
			<InDevelopment />
		</main>
	)
}

export default Home;