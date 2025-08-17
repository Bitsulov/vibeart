import useValidationReg from "./useValidationReg";

const useSubmitReg = () => {
	const { validateRegForm } = useValidationReg();
	
	const submitReg = () => {
		e.preventDefault();
		if(!validateRegForm) return
		if(password !== passwordAgain) {
			setPasswordRegError(true);
			setPasswordAgainRegError(true);
			setErrorText("Пароли не совпадают");
		} else {
			console.log("Форма отправлена");
		}
	}

	return {submitReg}
}

export default useSubmitReg;