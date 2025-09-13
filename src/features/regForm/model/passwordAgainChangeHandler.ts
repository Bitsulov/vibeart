import { setPasswordAgainValueReg } from "./regSlice.js";
import type { Dispatch } from "@reduxjs/toolkit";

function passwordAgainChangeHandler(e: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch) {
    dispatch(setPasswordAgainValueReg(e.target.value));
}

export { passwordAgainChangeHandler };
