import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Profile from './pages/profile';
import Post from "./pages/post";
import Messages from "./pages/messages";
import Chat from "./pages/chat";
import Notifications from "./pages/notifications";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from './pages/error';
import Notice from './components/notice/notice';
import ModalWindow from './components/modalWindow/modalWindow';
import './App.css';

function App() {
	const [noticeText, setNoticeText] = useState("");
	const [gotNotice, setGotNotice] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const [propsModalContent, setPropsModalContent] = useState({});
	const [showModal, setShowModal] = useState(false);

	const getNewNotice = (noticeText) => {
		setNoticeText(noticeText);
		setGotNotice(true);
	}

	const showModalContent = (link, props) => {
		setPropsModalContent({ ...props });
		setModalContent(() => link);
		setShowModal(true);
	}

	return (
		<Router>
			<ModalWindow Component={modalContent} propsModalContent={propsModalContent} showModal={showModal} setShowModal={setShowModal} />
			<Notice message={noticeText} newNotice={gotNotice} setNewNotice={setGotNotice} />
			<Header />
			<Routes>
				{/* Инфо и регистрация/вход */}
				<Route path="/" element={<Home getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* "Лента" */}
				<Route path="/gallery" element={<Gallery getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Профиль (свой или чужой) */}
				<Route path="/profile/:profileId" element={<Profile getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Пост */}
				<Route path="/post/:postId" element={<Post getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Сообщения */}
				<Route path="/messages" element={<Messages getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Чат */}
				<Route path="/messages/:chatId" element={<Chat getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Уведомления */}
				<Route path="/notifications" element={<Notifications getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* (экспериментально) форма, связь с нами */}
				<Route path="/contact" element={<Contact getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Информация */}
				<Route path="/about" element={<About getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
				{/* Ошибка */}
				<Route path="*" element={<Error getNewNotice={getNewNotice} showModalContent={showModalContent} />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;