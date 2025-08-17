import { useDispatch } from "react-redux";
import { setVisibility } from "../../modalWindow/model/modalSlice";

const dispatch = useDispatch();

function regButtonHandler(e) {
	dispatch(setVisibility({type: "reg", show: true}));
}

export {regButtonHandler}