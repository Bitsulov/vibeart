import { setVisibility } from "../../modalWindow/model/modalSlice";

function authButtonHandler(e, dispatch) {
	dispatch(setVisibility({type: "sign", show: true}));
}

export {authButtonHandler}
