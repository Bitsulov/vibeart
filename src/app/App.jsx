import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				{/* Инфо и регистрация/вход */}
				<Route path="/" element={<Home />} />
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
				<Route path="/contact" element={<Contact />} />
				{/* Информация */}
				<Route path="/about" element={<About />} />
				{/* Ошибка */}
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	)
}

export default App;