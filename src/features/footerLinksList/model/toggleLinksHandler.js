import { setIsFooterLinksOpen, setFooterLinksHeight } from "./footerLinksSlice";

const toggleLinksHandler = (e, dispatch, footerLinksHeight, OPENFOOTERLINKSHEIGHT) => {
	if(!footerLinksHeight || footerLinksHeight === "0px") {
		dispatch(setIsFooterLinksOpen(true));
		dispatch(setFooterLinksHeight(OPENFOOTERLINKSHEIGHT));
	} else {
		dispatch(setIsFooterLinksOpen(false));
		dispatch(setFooterLinksHeight(0));
	}
}

export {toggleLinksHandler}
