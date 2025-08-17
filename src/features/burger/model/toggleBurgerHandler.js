import { useDispatch, useSelector } from "react-redux";
import { setIsBurgerOpen, setBurgerLinksHeight } from "./BurgerSlice";
import { BURGEROPENLINKSHEIGHT, burgerLinksHeight } from "./selectors";

const burgerLinksHeight = useSelector(burgerLinksHeight);
const BURGEROPENLINKSHEIGHT = useSelector(BURGEROPENLINKSHEIGHT);

const dispatch = useDispatch();

function toggleBurgerHandler() {
	if(!burgerLinksHeight || burgerLinksHeight === "0px") {
		dispatch(setIsBurgerOpen(true));
		dispatch(setBurgerLinksHeight(BURGEROPENLINKSHEIGHT));
	} else {
		dispatch(setIsBurgerOpen(false));
		dispatch(setBurgerLinksHeight(0));
	}
}

export {toggleBurgerHandler}