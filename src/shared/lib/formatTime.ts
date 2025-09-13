export function formatTime(date1: number, date2: number) {
    /*
	Форматирует временной интервал, заданный в миллисекундах,
	в удобочитаемую строку на русском языке, указывающую сколько времени прошло
	(например, "5 минут назад", "3 дня назад").
	*/
    const units = [
        { limit: 60000, divisor: 1000, names: ["секунда", "секунды", "секунд"] },
        { limit: 3600000, divisor: 60000, names: ["минута", "минуты", "минут"] },
        { limit: 86400000, divisor: 3600000, names: ["час", "часа", "часов"] },
        { limit: 604800000, divisor: 86400000, names: ["день", "дня", "дней"] },
        { limit: 2628000000, divisor: 604800000, names: ["неделя", "недели", "недель"] },
        { limit: 31640000000, divisor: 2628000000, names: ["месяц", "месяца", "месяцев"] },
        { limit: Infinity, divisor: 31640000000, names: ["год", "года", "лет"] }
    ];

    const milliseconds = date1 - date2;

    const unit = units.find(u => milliseconds < u.limit);
    if (!unit) return "Только что";
    const num = Math.floor(milliseconds / unit.divisor);
    const remainder = num % 10;

    let word;
    if (num > 10 && num < 15) {
        word = unit.names[2];
    } else if (remainder === 1) {
        word = unit.names[0];
    } else if (remainder > 1 && remainder < 5) {
        word = unit.names[1];
    } else {
        word = unit.names[2];
    }

    return `${num} ${word} назад`;
}
