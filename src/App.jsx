import {useState} from 'react';
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
import './App.css';

function App() {
	const [noticeText, setNoticeText] = useState("");
	const [gotNotice, setGotNotice] = useState(false);

	const getNewNotice = () => {
		setGotNotice(true);
	}

	return (
		<Router>
			<Notice message={noticeText} newNotice={gotNotice} setNewNotice={setGotNotice} />
			<Header />
			<Routes>
				{/* Инфо и регистрация/вход */}
				<Route path="/" element={<Home setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* "Лента" */}
				<Route path="/gallery" element={<Gallery setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Профиль (свой или чужой) */}
				<Route path="/profile/:profileId" element={<Profile setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Пост */}
				<Route path="/post/:postId" element={<Post setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Сообщения */}
				<Route path="/messages" element={<Messages setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Чат */}
				<Route path="/messages/:chatId" element={<Chat setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Уведомления */}
				<Route path="/notifications" element={<Notifications setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* (экспериментально) форма, связь с нами */}
				<Route path="/contact" element={<Contact setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Информация */}
				<Route path="/about" element={<About setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
				{/* Ошибка */}
				<Route path="*" element={<Error setNoticeText={setNoticeText} getNewNotice={getNewNotice} />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;