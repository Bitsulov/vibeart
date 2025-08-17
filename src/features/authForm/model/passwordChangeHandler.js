import { useDispatch } from "react-redux";
import { setPasswordValueSign } from "./authSlice";

const dispatch = useDispatch();

function passwordChangeHandler(e) {
	dispatch(setPasswordValueSign(e.target.value));
}

export {passwordChangeHandler}