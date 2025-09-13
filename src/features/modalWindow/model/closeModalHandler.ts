import type { Dispatch } from "@reduxjs/toolkit";
import { toggle } from "./modalSlice.js";
import type React from "react";

function closeModalHandler(e: React.MouseEvent, dispatch: Dispatch) {
    e.stopPropagation();
    dispatch(toggle());
}

export { closeModalHandler };
