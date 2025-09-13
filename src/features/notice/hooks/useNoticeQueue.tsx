import { useSelector, useDispatch } from "react-redux";
import { selectIsNewNotice, selectNoticeMessage, selectNoticesQueue, selectShowNotice } from "../model/selectors.js";
import { resetNewNotice, setCurrentMessageNotice, setNoticesQueue } from "../model/noticeSlice.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { useEffect } from "react";
import { showNoticeFunc } from "../lib/showNotice.js";

const useNoticeQueue = () => {
    const loaded = useLoadPageStatus();
    const queue = useSelector(selectNoticesQueue);
    const noticeMessageNew = useSelector(selectNoticeMessage);
    const isNewNotice = useSelector(selectIsNewNotice);
    const showNotice = useSelector(selectShowNotice);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isNewNotice && loaded && noticeMessageNew) {
            if (!queue.includes(noticeMessageNew)) {
                dispatch(setNoticesQueue([...queue, noticeMessageNew]));
            }
            dispatch(resetNewNotice());
        }
    }, [isNewNotice, loaded, noticeMessageNew, queue, dispatch]);

    useEffect(() => {
        if (loaded && !showNotice && queue.length > 0) {
            dispatch(setCurrentMessageNotice(queue[0]));
            dispatch(setNoticesQueue(queue.slice(1)));
            showNoticeFunc(dispatch);
        }
    }, [queue, showNotice, loaded, dispatch]);
};

export { useNoticeQueue };
