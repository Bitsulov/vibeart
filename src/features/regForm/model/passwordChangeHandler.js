import { useDispatch } from "react-redux";
import { setPasswordValueReg } from "./regSlice";

const dispatch = useDispatch();

function passwordChangeHandler(e) {
	dispatch(setPasswordValueReg(e.target.value));
}

export {passwordChangeHandler}