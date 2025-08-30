import { toggle } from "./modalSlice";

function closeModalHandler(e, dispatch) {
	e.stopPropagation();
	dispatch(toggle());
}

export {closeModalHandler}
