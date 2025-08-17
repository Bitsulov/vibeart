import { useSelector } from "react-redux"
import { selectNotificationsPageNotices, selectMessagesPageNotices } from "../../../entities/notificationsPages";

const noticesLength = useSelector(selectNotificationsPageNotices);
const chatsLenght = useSelector(selectMessagesPageNotices);

export const burgerNavigationOptions = [
	{text: "Уведомления", haveCounter: true, counter: noticesLength, href: "/notifications"},
	{text: "Сообщения", haveCounter: true, counter: chatsLenght, href: "/messages"},
	{text: "Подписки", haveCounter: false, href: "#"},
	{text: "Профиль", haveCounter: false, href: `/profile/${1}`},
]