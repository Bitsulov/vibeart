import { setIsBurgerOpen, setBurgerLinksHeight } from "./BurgerSlice";

function toggleBurgerHandler(e, dispatch, burgerLinksHeight, BURGEROPENLINKSHEIGHT) {
	if(!burgerLinksHeight || burgerLinksHeight === "0px") {
		dispatch(setIsBurgerOpen(true));
		dispatch(setBurgerLinksHeight(BURGEROPENLINKSHEIGHT));
	} else {
		dispatch(setIsBurgerOpen(false));
		dispatch(setBurgerLinksHeight(0));
	}
}

export {toggleBurgerHandler}
