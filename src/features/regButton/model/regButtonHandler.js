import { setVisibility } from "../../modalWindow/model/modalSlice";

function regButtonHandler(e, dispatch) {
	dispatch(setVisibility({type: "reg", show: true}));
}

export {regButtonHandler}