import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import LoaderPage from './components/loaderPage/loaderPage';
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

	const getNewNotice = (noticeText) => {
		setNoticeText(noticeText);
		setGotNotice(true);
	}

	return (
		<Router>
			<LoaderPage />
			<Notice message={noticeText} newNotice={gotNotice} setNewNotice={setGotNotice} />
			<Header />
			<Routes>
				{/* Инфо и регистрация/вход */}
				<Route path="/" element={<Home getNewNotice={getNewNotice} />} />
				{/* "Лента" */}
				<Route path="/gallery" element={<Gallery getNewNotice={getNewNotice} />} />
				{/* Профиль (свой или чужой) */}
				<Route path="/profile/:profileId" element={<Profile getNewNotice={getNewNotice} />} />
				{/* Пост */}
				<Route path="/post/:postId" element={<Post getNewNotice={getNewNotice} />} />
				{/* Сообщения */}
				<Route path="/messages" element={<Messages getNewNotice={getNewNotice} />} />
				{/* Чат */}
				<Route path="/messages/:chatId" element={<Chat getNewNotice={getNewNotice} />} />
				{/* Уведомления */}
				<Route path="/notifications" element={<Notifications getNewNotice={getNewNotice} />} />
				{/* Связь с нами */}
				<Route path="/contact" element={<Contact getNewNotice={getNewNotice} />} />
				{/* Информация */}
				<Route path="/about" element={<About getNewNotice={getNewNotice} />} />
				{/* Ошибка */}
				<Route path="*" element={<Error getNewNotice={getNewNotice} />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;