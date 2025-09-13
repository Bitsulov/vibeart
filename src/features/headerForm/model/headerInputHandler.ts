import type { Dispatch } from "redux";
import { setSearchText } from "./headerFormSlice.js";

function headerInputHandler(e: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch) {
    dispatch(setSearchText(e.target.value));
}

export { headerInputHandler };
