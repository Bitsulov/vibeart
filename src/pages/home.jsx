import React, { useEffect, useState } from 'react';
import "../styles/home.css";
import ModalWindow from '../components/modalWindow/modalWindow';
import InputForm from '../components/inputForm/inputForm';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibility, toggle } from '../store/modalSlice';

const Home = ({getNewNotice}) => {
	const showModal = useSelector(state => state.modal.show);
	const typeModal = useSelector(state => state.modal.type)
	const dispatch = useDispatch();

	const [emailValueSign, setEmailValueSign] = useState("");
	const [passwordValueSign, setPasswordValueSign] = useState("");
	const [emailValueReg, setEmailValueReg] = useState("");
	const [passwordValueReg, setPasswordValueReg] = useState("");
	const [passwordAgainValueReg, setPasswordAgainValueReg] = useState("");

	const [emailSignError, setEmailSignError] = useState(false);
	const [passwordSignError, setPasswordSignError] = useState(false);
	const [emailRegError, setEmailRegError] = useState(false);
	const [passwordRegError, setPasswordRegError] = useState(false);
	const [passwordAgainRegError, setPasswordAgainRegError] = useState(false);
	const [errorText, setErrorText] = useState("");

	const submitSign = (e) => {
		e.preventDefault();
		let email = emailValueSign.trim();
		let password = passwordValueSign.trim();
		if(email === "" && password === "") {
			setEmailSignError(true);
			setPasswordSignError(true);
			setErrorText("Заполните пустые поля");
		} else if(email === "") {
			setEmailSignError(true);
			setPasswordSignError(false);
			setErrorText("Заполните email");
		} else if(password === "") {
			setPasswordSignError(true);
			setEmailSignError(false);
			setErrorText("Заполните пароль");
		} else if(email.indexOf("--") !== -1 || password.indexOf("--") !== -1) {
			setErrorText("Произошла ошибка");
		} else {
			setEmailSignError(false);
			setPasswordSignError(false);
			setErrorText("");
		}
	}

	const submitReg = (e) => {
		e.preventDefault();
		let email = emailValueReg.trim();
		let password = passwordValueReg.trim();
		let passwordAgain = passwordAgainValueReg.trim();
		let str = [];
		let isEmpty = false;
		if(email === "" && password === "" && passwordAgain === "") {
			setEmailRegError(true);
			setPasswordRegError(true);
			setPasswordAgainRegError(true);
			setErrorText("Заполните пустые поля");
			return
		}
		if(email === "") {
			setEmailRegError(true);
			str.push("email");
			isEmpty = true;
		} else {
			setEmailRegError(false);
		}
		if(password === "") {
			setPasswordRegError(true);
			str.push("пароль");
			isEmpty = true;
		} else {
			setPasswordRegError(false);
		}
		if(passwordAgain === "") {
			setPasswordAgainRegError(true)
			str.push("повторный пароль");
			isEmpty = true;
		} else {
			setPasswordAgainRegError(false);
		}
		if(isEmpty) {
			setErrorText(`Заполните ${str.join(" и ")}`);
		} else if(email.indexOf("--") !== -1 || password.indexOf("--") !== -1) {
			setErrorText("Произошла ошибка");
		} else {
			setEmailRegError(false);
			setPasswordRegError(false);
			setPasswordAgainRegError(false);
			setErrorText("");

			if(password !== passwordAgain) {
				setPasswordRegError(true);
				setPasswordAgainRegError(true);
				setErrorText("Пароли не совпадают");
			}
		}
	}
	
	const openSign = () => {
		dispatch(setVisibility({type: "sign", show: true}));
	}

	const openRegister = () => {
		dispatch(setVisibility({type: "register", show: true}));
	}

	useEffect(() => {
		if(showModal === false) {
			setTimeout(() => {
				setEmailSignError(false);
				setPasswordSignError(false);
				setEmailRegError(false);
				setPasswordRegError(false);
				setPasswordAgainRegError(false);
				setErrorText("");
				dispatch(setVisibility({type: typeModal, show: false}));
			}, 350);
		}
	}, [showModal])

	return (
		<main className="home">
			<ModalWindow showModal={showModal} setShowModal={() => dispatch(setVisibility({type: typeModal, show: false}))} >
				{typeModal == "sign" ? 
					<section className="authentication">
						<h2 className="authentication__title">Войти</h2>
						<form className="authentication__form" onSubmit={(e) => submitSign(e)}>
							<InputForm
								id="emailAuthentication"
								type="email"
								placeholder="Email"
								placeholderClassName={emailSignError ? "errorPlaceholder" : ""}
								value={emailValueSign}
								onChange={e => setEmailValueSign(e.target.value)}
								className={emailSignError ? "errorInput" : ""}
							/>
							<InputForm
								id="passwordAuthentication"
								type="password"
								placeholder="Пароль"
								placeholderClassName={passwordSignError ? "errorPlaceholder" : ""}
								minLength={6}
								value={passwordValueSign}
								onChange={e => setPasswordValueSign(e.target.value)}
								className={passwordSignError ? "errorInputLeft" : ""}
							/>
							<p className={errorText ? "authentication__error authentication__error-show" : "authentication__error"}>{errorText}</p>
							<button className="authentication__submit" type="submit">Отправить</button>
						</form>
					</section>
				: typeModal == "register" ?
					<section className="authentication">
						<h2 className="authentication__title">Зарегистрироваться</h2>
						<form className="authentication__form" onSubmit={submitReg}>
							<InputForm
								id="emailAuthentication"
								type="email"
								placeholder="Email"
								placeholderClassName={emailRegError ? "errorPlaceholder" : ""}
								value={emailValueReg}
								onChange={e => setEmailValueReg(e.target.value)}
								className={emailRegError ? "errorInput" : ""}
							/>
							<InputForm
								id="passwordAuthentication"
								type="password"
								placeholder="Пароль"
								placeholderClassName={passwordRegError ? "errorPlaceholder" : ""}
								minLength={6}
								value={passwordValueReg}
								onChange={e => setPasswordValueReg(e.target.value)}
								className={passwordRegError ? "errorInputLeft" : ""}
							/>
							<InputForm
								id="passwordAgainAuthentication"
								type="password"
								placeholder="Повторите пароль"
								placeholderClassName={passwordAgainRegError ? "errorPlaceholder" : ""}
								minLength={6}
								value={passwordAgainValueReg}
								onChange={e => setPasswordAgainValueReg(e.target.value)}
								className={passwordAgainRegError ? "errorInputLeft" : ""}
							/>
							<p className={errorText ? "authentication__error authentication__error-show" : "authentication__error"}>{errorText}</p>
							<button className="authentication__submit" type="submit">Отправить</button>
						</form>
					</section>
				: ""
				}
			</ModalWindow>
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