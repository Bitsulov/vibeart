import React, { useState } from 'react';
import "../styles/error.css";
import { useLocation } from 'react-router-dom';

const Error = ({getNewNotice}) => {
	const location =  useLocation();
	const query = new URLSearchParams(location.search);
	const status = query.get("code") || 404;
	const [cases, setCases] = useState({
		400: "Ошибка на стороне клиента.",
		403: "У вас нет прав доступа для этой страницы, войдите в аккаунт.",
		404: "Cтраница, которую вы ищете, была перемещена, удалена, или никогда не существовала.",
		500: "Проблема на стороне сервера. Попробуйте перезагрузить страницу или зайти позднее.",
	})
	return (
		<main className="error">
			<div className="error__inner">
				<h1 className="error__title">Произошла ошибка с кодом: {status}</h1>
				<p className="error__text">
					{cases[status] || cases[Math.floor(status / 100) * 100]}
				</p>
			</div>
		</main>
	)
}

export default Error;