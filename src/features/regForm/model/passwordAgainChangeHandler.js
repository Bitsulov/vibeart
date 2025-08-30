import { setPasswordAgainValueReg } from "./regSlice";

function passwordAgainChangeHandler(e, dispatch) {
	dispatch(setPasswordAgainValueReg(e.target.value));
}

export {passwordAgainChangeHandler}
