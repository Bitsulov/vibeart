import { setPasswordValueReg } from "./regSlice.js";
import type { Dispatch } from "@reduxjs/toolkit";

function passwordChangeHandler(e: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch) {
    dispatch(setPasswordValueReg(e.target.value));
}

export { passwordChangeHandler };
