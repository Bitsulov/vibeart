import { useSelector, useDispatch } from "react-redux";
import { selectIsNewNotice, selectNoticeMessage, selectNoticesQueue, selectShowNotice } from "../model/selectors";
import { resetNewNotice, setShowNotice, setCurrentMessageNotice, setQueue, setClassesNotice } from "../model/noticeSlice";
import { useLoadPageStatus } from "../../../entities/page";

const useNoticeQueue = () => {
	const loaded = useLoadPageStatus();
	const queue = useSelector(selectNoticesQueue);
	const noticeMessageNew = useSelector(selectNoticeMessage);
	const isNewNotice = useSelector(selectIsNewNotice);
	const showNotice = useSelector(selectShowNotice);
	
	const dispatch = useDispatch();

	useEffect(() => {
		if(isNewNotice && loaded) {
			queue.includes(noticeMessageNew) ? {} : setQueue([...queue, noticeMessageNew]);
			checkNotice();
			dispatch(resetNewNotice());
		}
	}, [isNewNotice])

	useEffect(() => {
		if(!showNotice && loaded) {
			checkNotice();
		}
	}, [showNotice])

	const checkNotice = () => {
		if(!showNotice) {
			if(queue.length !== 0) {
				setCurrentMessageNotice(queue[0]);
				setQueue(queue.slice(1));
				showNotice();
			}
		}
	}
}

export default useNoticeQueue;