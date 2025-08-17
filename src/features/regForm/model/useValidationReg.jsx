import { setEmailRegError, setPasswordRegError, setPasswordAgainRegError, setErrorText } from './regSlice';
import { useDispatch, useSelector } from 'react-redux';

const useValidationReg = () => {
	const emailValueReg = useSelector(state => state.reg.emailValueReg);
	const passwordValueReg = useSelector(state => state.reg.passwordValueReg);
	const passwordAgainValueReg = useSelector(state => state.reg.passwordAgainValueReg);

	const dispatch = useDispatch();

	const validateRegForm = () => {
		e.preventDefault();
		let email = emailValueReg.trim();
		let password = passwordValueReg.trim();
		let passwordAgain = passwordAgainValueReg.trim();
		let str = [];
		let isEmpty = false;
		if(email === "" && password === "" && passwordAgain === "") {
			dispatch(setEmailRegError(true));
			dispatch(setPasswordRegError(true));
			dispatch(setPasswordAgainRegError(true));
			dispatch(setErrorText("Заполните пустые поля"));
			return false;
		}
		if(email === "") {
			dispatch(setEmailRegError(true));
			str.push("email");
			isEmpty = true;
		} else {
			dispatch(setEmailRegError(false));
		}
		if(password === "") {
			dispatch(setPasswordRegError(true));
			str.push("пароль");
			isEmpty = true;
		} else {
			dispatch(setPasswordRegError(false));
		}
		if(passwordAgain === "") {
			dispatch(setPasswordAgainRegError(true));
			str.push("повторный пароль");
			isEmpty = true;
		} else {
			dispatch(setPasswordAgainRegError(false));
		}
		if(isEmpty) {
			dispatch(setErrorText(`Заполните ${str.join(" и ")}`));
			return false;
		} else if(email.indexOf("--") !== -1 || password.indexOf("--") !== -1 || passwordAgain.indexOf("--") !== -1) {
			dispatch(setErrorText("Произошла ошибка"));
			return false;
		} else {
			dispatch(setEmailRegError(false));
			dispatch(setPasswordRegError(false));
			dispatch(setPasswordAgainRegError(false));
			dispatch(setErrorText(""));
			return true;
		}
	};

	return {validateRegForm}
}

export default useValidationReg;