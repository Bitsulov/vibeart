import { getNewNotice } from "features/notice/model/noticeSlice";

export function toggleSubscribeHandler(e, dispatch, isSubscribe, setIsSubscribe, userName) {
	if(isSubscribe) {
		dispatch(getNewNotice(`Вы отписались от пользователя ${userName}`));
	} else {
		dispatch(getNewNotice(`Вы подписались на пользователя ${userName}`));
	}
	setIsSubscribe(state => !state);
}