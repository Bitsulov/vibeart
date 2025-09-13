import type { Dispatch } from "@reduxjs/toolkit";
import { setIsLoaded } from "../model/pageStatsSlice.js";

export function setStatusPage(dispatch: Dispatch) {
	dispatch(setIsLoaded(true));
}
