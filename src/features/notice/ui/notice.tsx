import classes from "./notice.module.scss";
import { useNoticeQueue } from "../hooks/useNoticeQueue.jsx";
import { selectClassesNotice, selectCurrentMessageNotice } from "../model/selectors.js";
import { useSelector } from "react-redux";

const Notice = () => {
    useNoticeQueue();
    const currentMessage = useSelector(selectCurrentMessageNotice);
    const classesNotice = useSelector(selectClassesNotice);

    return (
        <div className={classesNotice}>
            <p className={classes.notice__text}>{currentMessage}</p>
        </div>
    );
};

export { Notice };
