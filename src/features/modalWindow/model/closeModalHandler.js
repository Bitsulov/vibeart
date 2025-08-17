import { useDispatch } from "react-redux";
import { toggle } from "./modalSlice";

const dispatch = useDispatch();

function closeModalHandler(e) {
	e.stopPropagation();
	dispatch(toggle())
}

export {closeModalHandler}