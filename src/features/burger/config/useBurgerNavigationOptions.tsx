import { useSelector } from "react-redux";
import { selectNotificationsPageNotices, selectMessagesPageNotices } from "entities/notificationsPages/index.js";

export const useBurgerNavigationOptions = () => {
    const noticesLength = useSelector(selectNotificationsPageNotices);
    const chatsLength = useSelector(selectMessagesPageNotices);

    return [
        { text: "Уведомления", haveCounter: true, counter: noticesLength, href: "/notifications" },
        { text: "Сообщения", haveCounter: true, counter: chatsLength, href: "/messages" },
        { text: "Подписки", haveCounter: false, href: "#" },
        { text: "Профиль", haveCounter: false, href: `/profile/${1}` }
    ];
};
