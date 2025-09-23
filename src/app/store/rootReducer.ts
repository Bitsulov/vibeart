import { combineReducers } from "redux";
import { modalReducer } from "features/modalWindow/model/modalSlice.js";
import { authReducer } from "features/authForm/model/authSlice.js";
import { regReducer } from "features/regForm/model/regSlice.js";
import { headerFormReducer } from "features/headerForm/model/headerFormSlice.js";
import { notificationsPagesReducer } from "entities/notificationsPages/index.js";
import { burgerReducer } from "features/burger/model/burgerSlice.js";
import { footerLinksReducer } from "features/footerLinksList/model/footerLinksSlice.js";
import { pageStatsReducer } from "entities/pageStats/model/pageStatsSlice.js";
import { noticeReducer } from "features/notice/model/noticeSlice.js";
import { userReducer } from "entities/user/model/userSlice.js";

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
    reg: regReducer
});
