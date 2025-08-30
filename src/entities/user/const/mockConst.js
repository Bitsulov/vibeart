import { createUser } from "../model/createUser";

export const userMock = createUser({
	id: 1,
	userName: "anna_artist",
	firstName: "Анна",
	secondName: "Иванова",
	description: "Цифровой художник из Москвы. Люблю фэнтези и яркие цвета. Комиссии открыты! fdsakgf jsaDGKF JUgdskfu gdskaufg aDSKUFHdak sufdkshf dksf kdsg fdksugf aksu",
	subcribers: 12000,
	subscribes: 45,
	works: 78,
	srcImg: "../src/shared/icons/ava-person.jpg",
	status: "online"
});

export const userChatMock = createUser({
	id: 2,
	firstName: "Пользователь",
	secondName: "1241231",
	userName: "user1241231",
	srcImg: "../src/shared/icons/ava-person.jpg",
	status: Math.random() > 0.5 ? "online" : "offline"
});

export const userProfileMock = createUser({
	id: 3,
	firstName: "Тестовый",
	secondName: "Пользователь",
	userName: "test_user",
	srcImg: "../src/shared/icons/ava.jpg",
	description: "тест Lorem ipsum dolor sit amet, consectetuer adipiscin Lorem ipsum dolor sit amet, consectetuer adipiscin",
	subcribers: 1000000,
	subscribes: 1000,
	works: 10000,
	status: "offline"
});
