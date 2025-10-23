import { t } from "i18next";

export function formatTime(date1: number, date2: number) {
	const milliseconds = date1 - date2;

	const units = [
		{ limit: 60000, divisor: 1000, key: "second" },
		{ limit: 3600000, divisor: 60000, key: "minute" },
		{ limit: 86400000, divisor: 3600000, key: "hour" },
		{ limit: 604800000, divisor: 86400000, key: "day" },
		{ limit: 2628000000, divisor: 604800000, key: "week" },
		{ limit: 31640000000, divisor: 2628000000, key: "month" },
		{ limit: Infinity, divisor: 31640000000, key: "year" }
	];

	if (milliseconds < 1000) return t("time.justNow");

	const unit = units.find(u => milliseconds < u.limit);
	if (!unit) return t("time.justNow");

	const num = Math.floor(milliseconds / unit.divisor);

	return t(`timeAgo.${unit.key}`, { count: num });
}
