function toggleButtonHandler(e, setIsShowPassword) {
	setIsShowPassword(state => !state);
}

export {toggleButtonHandler}