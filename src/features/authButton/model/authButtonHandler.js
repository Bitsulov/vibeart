import { useDispatch } from "react-redux";
import { setVisibility } from "../../modalWindow/model/modalSlice";

const dispatch = useDispatch();

function authButtonHandler(e) {
	dispatch(setVisibility({type: "sign", show: true}));
}

export {authButtonHandler}