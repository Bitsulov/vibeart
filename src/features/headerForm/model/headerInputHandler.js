import { setSearchText } from "./headerFormSlice";

function headerInputHandler(e, dispatch) {
	dispatch(setSearchText(e.target.value));
}

export {headerInputHandler}
