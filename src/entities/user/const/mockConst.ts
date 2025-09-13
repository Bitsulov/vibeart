import { createUser } from "../model/createUser.js";
import ava1 from "@/shared/icons/ava-person.jpg";
import ava2 from "@/shared/icons/ava.jpg";

export const userMock = createUser({
    id: 1,
    userName: "anna_artist",
    firstName: "Анна",
    secondName: "Иванова",
    description:
        "Цифровой художник из Москвы. Люблю фэнтези и яркие цвета. Комиссии открыты! fdsakgf jsaDGKF JUgdskfu gdskaufg aDSKUFHdak sufdkshf dksf kdsg fdksugf aksu",
    subscribers: 12000,
    subscribes: 45,
    works: 78,
    srcImg: ava1,
    status: "online"
});

export const userChatMock = createUser({
    id: 2,
    firstName: "Пользователь",
    secondName: "1241231",
    userName: "user1241231",
    srcImg: ava1,
    status: Math.random() > 0.5 ? "online" : "offline"
});

export const userProfileMock = createUser({
    id: 3,
    firstName: "Тестовый",
    secondName: "Пользователь",
    userName: "test_user",
    srcImg: ava2,
    description:
        "тест Lorem ipsum dolor sit amet, consectetuer adipiscin Lorem ipsum dolor sit amet, consectetuer adipiscin",
    subscribers: 1000000,
    subscribes: 1000,
    works: 10000,
    status: "offline"
});
