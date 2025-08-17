import { useDispatch } from "react-redux";
import { setEmailValueSign } from "./authSlice";

const dispatch = useDispatch();

function emailChangeHandler(e) {
	dispatch(setEmailValueSign(e.target.value));
}

export {emailChangeHandler}