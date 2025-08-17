import { useDispatch } from "react-redux";
import { setEmailValueReg } from "./regSlice";

const dispatch = useDispatch();

function emailChangeHandler(e) {
	dispatch(setEmailValueReg(e.target.value));
}

export {emailChangeHandler}