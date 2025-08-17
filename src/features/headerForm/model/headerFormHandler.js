import { useDispatch, useSelector } from "react-redux";

const searchRef = useSelector(state => state.headerForm.formRef);

const dispatch = useDispatch();

function headerFormHandler(e) {
	e.preventDefault();
	dispatch(setSearchText(""));
	searchRef.current.previousElementSibling.blur();
	searchRef.current.click();
}

export {headerFormHandler}