import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "pages/home";
import { Gallery } from "pages/gallery";
import { Profile } from 'pages/profile';
import { Post } from "pages/post";
import { Messages } from "pages/messages";
import { Chat } from "pages/chat";
import { Notifications } from "pages/notifications";
import { About } from "pages/about";
import { Contact } from "pages/contact";
import { Error } from 'pages/error';

const RouterProvider = () => {
	return (
		<Router>
			<Routes>
				{/* Инфо и регистрация/вход */}
				<Route path="/" element={<Home />} />
				{/* "Лента" */}
				<Route path="/gallery" element={<Gallery />} />
				{/* Профиль (свой или чужой) */}
				<Route path="/profile/:profileId" element={<Profile />} />
				{/* Пост */}
				<Route path="/post/:postId" element={<Post />} />
				{/* Сообщения */}
				<Route path="/messages" element={<Messages />} />
				{/* Чат */}
				<Route path="/messages/:chatId" element={<Chat />} />
				{/* Уведомления */}
				<Route path="/notifications" element={<Notifications />} />
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

export default RouterProvider;
