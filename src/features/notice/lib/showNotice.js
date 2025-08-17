import { setClassesNotice, setShowNotice } from "../model/noticeSlice";
import classes from "../ui/notice.module.css";

export function showNotice() {
	setClassesNotice(`${classes.notice} ${classes.noticeShow}`);
	setShowNotice(true);
	setTimeout(() => {
		setClassesNotice(`${classes.notice} ${classes.noticeHide}`);
		setTimeout(() => {
			setClassesNotice(classes.notice);
			setShowNotice(false);
		}, 1000)
	}, 9000)
}