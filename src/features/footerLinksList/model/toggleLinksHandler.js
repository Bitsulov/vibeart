import { useDispatch, useSelector } from "react-redux";
import { selectFooterLinksHeight, selectOPENFOOTERLINKSHEIGHT } from "./selectors";
import { setIsFooterLinksOpen, setFooterLinksHeight } from "./footerLinksSlice";

const footerLinksHeight = useSelector(selectFooterLinksHeight);
const OPENFOOTERLINKSHEIGHT = useSelector(selectOPENFOOTERLINKSHEIGHT);

const dispatch = useDispatch();

const toggleLinksHandler = () => {
	if(!footerLinksHeight || footerLinksHeight === "0px") {
		dispatch(setIsFooterLinksOpen(true));
		dispatch(setFooterLinksHeight(OPENFOOTERLINKSHEIGHT));
	} else {
		dispatch(setIsFooterLinksOpen(false));
		dispatch(setFooterLinksHeight(0));
	}
}

export {toggleLinksHandler}