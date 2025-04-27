import React from 'react';
import "../styles/home.css";
import InputForm from '../components/inputForm/inputForm';

const Home = ({getNewNotice, showModalContent}) => {
	
	const openSign = () => {
		showModalContent(
			<section className="authentication">
				<h2 className="authentication__title">Войти</h2>
				<form className="authentication__form">
					<InputForm id="emailAuthentication" type="email" placeholder="Email" required ></InputForm>
					<InputForm id="passwordAuthentication" type="password" placeholder="Пароль" required ></InputForm>
					<button className="authentication__submit" type="submit">Отправить</button>
				</form>
			</section>
		)
	}

	const openRegister = () => {
		showModalContent(
			<section className="authentication">
				<h2 className="authentication__title">Зарегистрироваться</h2>
				<form className="authentication__form">
					<InputForm id="emailAuthentication" type="email" placeholder="Email" required ></InputForm>
					<InputForm id="passwordAuthentication" type="password" placeholder="Пароль" required ></InputForm>
					<InputForm id="passwordAgainAuthentication" type="password" placeholder="Повторите пароль" required ></InputForm>
					<button className="authentication__submit" type="submit">Отправить</button>
				</form>
			</section>
		)
	}

	return (
		<main className="home">
			<section className="welcome">
				<h1 className="welcome__title">Добро пожаловать в VibeArt</h1>
				<p className="welcome__description">Место для художников: делись своими работами и находи вдохновение вместе с нами.</p>
				<div className="welcome__buttons">
					<button
						className="welcome__button"
						onClick={openSign}
					>
						Войти
					</button>
					<button
						className="welcome__button"
						onClick={openRegister}
					>
						Регистрация
					</button>
				</div>
			</section>
		</main>
	)
}

export default Home;