import classes from "./notificationItem.module.scss";
import { LinkWrapper } from "features/linkWrapper/index.js";
import { noticeTypes } from "../config/noticeTypes.jsx";
import { hrefTypes } from "../config/hrefTypes.js";
import type { NotificationType } from "entities/notification/index.js";

const NotificationItem = ({
    authorName,
    authorId,
    noticeType,
    date,
    srcImg,
    postName,
    postId,
    ...props
}: NotificationType) => {
    return (
        <LinkWrapper
            href={hrefTypes[noticeType]({ authorId, postId })}
            className={classes.notification__item}
            {...props}
        >
            <img src={srcImg} alt="Аватар" className={classes.notification__avatar}></img>
            <div className={classes.notification__content}>
                <p className={classes.notification__text}>{noticeTypes[noticeType]({ authorName, postName })}</p>
                <p className={classes.notification__date}>{date}</p>
            </div>
        </LinkWrapper>
    );
};

export { NotificationItem };
