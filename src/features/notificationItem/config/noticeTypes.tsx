import classes from "../ui/notificationItem.module.css";
import type { NoticeTypesParametersType } from "../model/types.js";

export const noticeTypes = {
    comment: ({ authorName, postName }: NoticeTypesParametersType) => (
        <>
            Пользователь <span className={classes.bold}>{authorName}</span> оставил комментарий к посту{" "}
            <span className={classes.link}>{postName}</span>
        </>
    ),
    answerComment: ({ authorName, postName }: NoticeTypesParametersType) => (
        <>
            Пользователь <span className={classes.bold}>{authorName}</span> ответил на ваш комментарий к посту{" "}
            <span className={classes.link}>{postName}</span>
        </>
    ),
    like: ({ authorName, postName }: NoticeTypesParametersType) => (
        <>
            Пользователь <span className={classes.bold}>{authorName}</span> лайкнул ваш пост{" "}
            <span className={classes.link}>{postName}</span>
        </>
    ),
    subscribe: ({ authorName, postName }: NoticeTypesParametersType) => (
        <>
            Пользователь <span className={classes.bold}>{authorName}</span> подписался на вас
        </>
    ),
    system: () => <>Системное уведомление</>
};
