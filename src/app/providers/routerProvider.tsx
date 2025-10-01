import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "pages/home/index.js";
import { Gallery } from "pages/gallery/index.js";
import { Profile } from "pages/profile/index.js";
import { Post } from "pages/post/index.js";
import { Messages } from "pages/messages/index.js";
import { Chat } from "pages/chat/index.js";
import { Notifications } from "pages/notifications/index.js";
import { About } from "pages/about/index.js";
import { Contact } from "pages/contact/index.js";
import { Error } from "pages/error/index.js";
import type { ReactNode } from "react";
import { Communities } from "pages/communities/index.js";
import { Community } from "pages/community/index.js";
import { Main } from "pages/main/index.js";

const RouterProvider = (): ReactNode => {
    return (
        <Router>
            <Routes>
				{/* Лендинг */}
				<Route path="/" element={<Main />} />
                {/* Регистрация/вход */}
                <Route path="/auth" element={<Home />} />
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
				{/* Список сообществ */}
				<Route path="/communities" element={<Communities />} />
				{/* Сообщество */}
				<Route path="/communities/:communityId" element={<Community />} />
                {/* Связь с нами */}
                <Route path="/contact" element={<Contact />} />
                {/* Информация */}
                <Route path="/about" element={<About />} />
                {/* Ошибка */}
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default RouterProvider;
