export function formatWorksRu(subscribers: number) {
	const remainder = subscribers % 10;
	if (subscribers > 10 && subscribers < 15) {
        return "работ";
    } else if (remainder === 1) {
        return "работа";
    } else if (remainder > 1 && remainder < 5) {
        return "работы";
    } else {
        return "работ";
    }
}
