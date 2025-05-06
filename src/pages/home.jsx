import React, { useEffect, useState } from 'react';
import "../styles/home.css";
import SignForm from '../components/signForm/signForm';
import RegForm from '../components/regForm/regForm';

const Home = ({getNewNotice, showModalContent}) => {
	const [valueEmailSign, setValueEmailSign] = useState("");
	const [valuePasswordSign, setValuePasswordSign] = useState("");
	const [valueEmailReg, setValueEmailReg] = useState("");
	const [valuePasswordReg, setValuePasswordReg] = useState("");
	const [valuePasswordAgainReg, setValuePasswordAgainReg] = useState("");
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState("");

	const onSubmitSign = (e) => {
		e.preventDefault();

	}

	const onSubmitReg = (e) => {
		e.preventDefault();
		console.log(valuePasswordReg.trim());
		console.log(valuePasswordAgainReg.trim())
		if(valuePasswordReg !== valuePasswordAgainReg) {
			setErrorText("Пароли не совпадают");
			setError(true);
		}
	}
	
	const openSign = () => {
		showModalContent(SignForm, {
			errorState: error,
			errorText: errorText,
			onSubmit: onSubmitSign,
			emailInputProps: {
				value: valueEmailSign,
				onChange(e) {
					setValueEmailSign(e.target.value);
				},
				placeholder: "Email"
			},
			passwordInputProps: {
				value: valuePasswordSign,
				onChange(e) {
					setValuePasswordSign(e.target.value);
				},
				placeholder: "Пароль"
			},
		});
	}

	const openRegister = () => {
		showModalContent(RegForm, {
			errorState: error,
			errorText: errorText,
			onSubmit: onSubmitReg,
			emailInputProps: {
				value: valueEmailReg,
				onChange(e) {
					setValueEmailReg(e.target.value);
				},
				placeholder: "Email"
			},
			passwordInputProps: {
				value: valuePasswordReg,
				onChange(e) {
					setValuePasswordReg(e.target.value);
				},
				placeholder: "Пароль"
			},
			passwordAgainInputProps: {
				value: valuePasswordAgainReg,
				onChange(e) {
					setValuePasswordAgainReg(e.target.value);
				},
				placeholder: "Повторите пароль"
			}
		});
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