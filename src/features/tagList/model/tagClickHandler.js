import { getNewNotice } from "../../notice/model/noticeSlice";

export function tagClickHandler(e, dispatch, tag) {
	navigator.clipboard.writeText(tag);
	dispatch(getNewNotice(`Тег "${tag}" скопирован`));
}
