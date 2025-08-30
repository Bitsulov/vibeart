import { setSearchText } from "./headerFormSlice";

function headerFormHandler(e, dispatch, searchText, navigate) {
	e.preventDefault();
	if(searchText.trim() !== "") {
		dispatch(setSearchText(""));
		navigate(`/gallery?search=${searchText}`);
	}
}

export {headerFormHandler}
