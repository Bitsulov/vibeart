import { setPasswordValueSign } from "./authSlice";

function passwordChangeHandler(e, dispatch) {
	dispatch(setPasswordValueSign(e.target.value));
}

export {passwordChangeHandler}