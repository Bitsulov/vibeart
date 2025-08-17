import { useDispatch } from "react-redux";

const dispatch = useDispatch();

function headerButtonHandler() {
	dispatch(setSearchText(""));
}

export {headerButtonHandler}