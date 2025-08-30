import { setEmailValueReg } from "./regSlice";

function emailChangeHandler(e, dispatch) {
	dispatch(setEmailValueReg(e.target.value));
}

export {emailChangeHandler}
