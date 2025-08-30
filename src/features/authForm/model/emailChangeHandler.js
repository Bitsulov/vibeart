import { setEmailValueSign } from "./authSlice";

function emailChangeHandler(e, dispatch) {
	dispatch(setEmailValueSign(e.target.value));
}

export {emailChangeHandler}
