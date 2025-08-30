import { combineReducers } from "redux";
import { modalReducer } from "features/modalWindow/model/modalSlice";
import { authReducer } from "features/authForm/model/authSlice";
import { regReducer } from "features/regForm/model/regSlice";
import { headerFormReducer } from "features/headerForm/model/headerFormSlice";
import { notificationsPagesReducer } from "entities/notificationsPages";
import { burgerReducer } from "features/burger/model/BurgerSlice";
import { footerLinksReducer } from "features/footerLinksList/model/footerLinksSlice";
import { pageStatsReducer } from "entities/pageStats/model/pageStatsSlice";
import { noticeReducer } from "features/notice/model/noticeSlice";
import { userReducer } from "entities/user/model/userSlice";

export const rootReducer = combineReducers({
	user: userReducer,
	modal: modalReducer,
	headerForm: headerFormReducer,
	notificationsPages: notificationsPagesReducer,
	burger: burgerReducer,
	footerLinks: footerLinksReducer,
	pageStats: pageStatsReducer,
	notice: noticeReducer,
	auth: authReducer,
	reg: regReducer,
});
