import { useDispatch } from "react-redux";

const dispatch = useDispatch();

function headerInputHandler(e) {
	dispatch(setSearchText(e.target.value));
}

export {headerInputHandler}