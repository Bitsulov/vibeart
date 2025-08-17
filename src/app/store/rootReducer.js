import { combineReducers } from "redux";
import { modalReducer } from "../../features/modalWindow/model/modalSlice";
import { authReducer } from "../../features/authForm/model/authSlice";
import { regReducer } from "../../features/regForm/model/regSlice";
import { headerFormReducer } from "../../features/headerForm/model/headerFormSlice";
import { notificationsPagesReducer } from "../../entities/notificationsPages";
import { burgerReducer } from "../../features/burger/model/BurgerSlice";
import { footerLinksReducer } from "../../features/footerLinksList/model/footerLinksSlice";
import { pageReducer } from "../../entities/page/model/pageSlice";
import { noticeReducer } from "../../features/notice/model/noticeSlice";

export const rootReducer = combineReducers({
	modal: modalReducer,
	headerModal: headerFormReducer,
	notificationsPages: notificationsPagesReducer,
	burger: burgerReducer,
	footerLinks: footerLinksReducer,
	page: pageReducer,
	notice: noticeReducer,
	auth: authReducer,
	reg: regReducer
});

export { rootReducer }