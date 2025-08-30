import { setClassesNotice, setShowNotice } from "../model/noticeSlice";
import classes from "../ui/notice.module.css";

export function showNoticeFunc(dispatch) {
	dispatch(setClassesNotice(`${classes.notice} ${classes.noticeShow}`));
	dispatch(setShowNotice(true));
	setTimeout(() => {
		dispatch(setClassesNotice(`${classes.notice} ${classes.noticeHide}`));
		setTimeout(() => {
			dispatch(setClassesNotice(classes.notice));
			dispatch(setShowNotice(false));
		}, 1000)
	}, 9000)
}