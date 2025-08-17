import { useDispatch } from "react-redux";
import { setPasswordAgainValueReg } from "./regSlice";

const dispatch = useDispatch();

function passwordAgainChangeHandler(e) {
	dispatch(setPasswordAgainValueReg(e.target.value));
}

export {passwordAgainChangeHandler}