import type { RootState } from "app/store/index.js";

export const selectIsFooterLinksOpen = (state: RootState) => state.footerLinks.isFooterLinksOpen;
export const selectFooterLinksHeight = (state: RootState) => state.footerLinks.footerLinksHeight;
export const selectOPENFOOTERLINKSHEIGHT = (state: RootState) => state.footerLinks.OPENFOOTERLINKSHEIGHT;
