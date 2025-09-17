export function formatSubscribersRu(subscribers: number) {
	const remainder = subscribers % 10;
	if (subscribers > 10 && subscribers < 15) {
        return "подписчиков";
    } else if (remainder === 1) {
        return "подписчик";
    } else if (remainder > 1 && remainder < 5) {
        return "подписчика";
    } else {
        return "подписчиков";
    }
}
