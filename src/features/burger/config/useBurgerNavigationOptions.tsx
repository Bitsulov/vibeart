import { useSelector } from "react-redux";
import { selectNotificationsPageNotices, selectMessagesPageNotices } from "entities/notificationsPages/index.js";
import { selectUserInfo } from "entities/user/index.js";

export const useBurgerNavigationOptions = () => {
    const noticesLength = useSelector(selectNotificationsPageNotices);
    const chatsLength = useSelector(selectMessagesPageNotices);
	const userInfo = useSelector(selectUserInfo);

    return [
        { text: "Уведомления", haveCounter: true, counter: noticesLength, href: "/notifications" },
        { text: "Сообщения", haveCounter: true, counter: chatsLength, href: "/messages" },
        { text: "Сообщества", haveCounter: false, href: "/communities" },
		{ text: "Галерея", haveCounter: false, href: "/gallery" },
        { text: "Профиль", haveCounter: false, href: `/profile/${userInfo.id}` },
    ];
};
