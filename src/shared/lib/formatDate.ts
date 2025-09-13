import { monthesRu } from "./monthesRu.js";

export function formatDate(date: Date) {
    const currentDate = new Date();
    const difDays = currentDate.getDate() - date.getDate();
    const isThisMonth = date.getMonth() === currentDate.getMonth();
    const isThisYear = date.getFullYear() === currentDate.getFullYear();
    if (!isThisYear) {
        return `${date.getDate()} ${monthesRu[date.getMonth() + 1]} ${date.getFullYear()}`;
    } else if (difDays === 0 && isThisMonth) {
        return "Сегодня";
    } else if (difDays === 1 && isThisMonth) {
        return "Вчера";
    } else {
        return `${date.getDate()} ${monthesRu[date.getMonth() + 1]}`;
    }
}
