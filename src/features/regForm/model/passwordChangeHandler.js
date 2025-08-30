import { setPasswordValueReg } from "./regSlice";

function passwordChangeHandler(e, dispatch) {
	dispatch(setPasswordValueReg(e.target.value));
}

export {passwordChangeHandler}