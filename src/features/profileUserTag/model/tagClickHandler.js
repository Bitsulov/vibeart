import { getNewNotice } from "features/notice/model/noticeSlice";

export function tagClickHandler(e, dispatch, userName) {
	navigator.clipboard.writeText(`@${userName}`);
	dispatch(getNewNotice("Тег пользователя cкопирован"));
}
