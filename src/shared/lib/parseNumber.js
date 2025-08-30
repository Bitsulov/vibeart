"use strict";

function intDiv(dividend, divisor) {
	return Math.floor(dividend / divisor);
}

function f(x, y) {
	return intDiv(x, y / 10);
}

function d(x, y) {
	return intDiv(x, y / 10) / 10;
}

export function parseNumber(number, precisely=true) {
	/*
	Сокращает запись длинных чисел, добавляя суффиксы (K, M, B) для чисел в диапазоне [1000, 9999999999] и Возвращает строку.
	Предназначена только для положительных целочисленных чисел или нуля.

	Примеры:
	- number = 50 → "50"
	- number = 100000 → "100K"
	- number = 10000000 → "10M" 
	- number = 1000000000 → "1B"

	Параметр precisely (по умолчанию true):
	- если false: возвращает сокращенную запись без дробной части
	- если true: добавляет один дробный разряд, когда в сокращенном варианте получается только одна значащая цифра
	(например: 1500 → "1.5K" вместо "1K", но 15000 → "15K" без дробной части)
	*/
	const billion = 1000000000;
	const million = 1000000;
	const thousand = 1000;
	let func = precisely ? d : f;
	if(number < 1000) {
		return String(number);
	} else {
		if(number >= billion) {
			return `${func(number, billion)}B`;
		} else if(number >= million) {
			return `${func(number, million)}M`;
		} else if(number >= thousand) {
			return `${func(number, thousand)}К`;
		}
	}
}