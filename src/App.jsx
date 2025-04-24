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

	return (
		<Router>
			<Header />
			<Notice message={noticeText} newNotice={gotNotice} setNewNotice={setGotNotice} />
			<Routes>
				{/* Инфо и регистрация/вход */}
				<Route path="/" element={<Home setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* "Лента" */}
				<Route path="/gallery" element={<Gallery setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Профиль (свой или чужой) */}
				<Route path="/profile/:profileId" element={<Profile setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Пост */}
				<Route path="/post/:postId" element={<Post setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Сообщения */}
				<Route path="/messages" element={<Messages setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Чат */}
				<Route path="/messages/:chatId" element={<Chat setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Уведомления */}
				<Route path="/notifications" element={<Notifications setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* (экспериментально) форма, связь с нами */}
				<Route path="/contact" element={<Contact setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Информация */}
				<Route path="/about" element={<About setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
				{/* Ошибка */}
				<Route path="*" element={<Error setNoticeText={setNoticeText} setGotNotice={setGotNotice} />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;