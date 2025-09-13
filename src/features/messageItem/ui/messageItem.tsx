import classes from "./messageItem.module.css";

interface MessageItemType {
    text: string;
    type: "outgoing" | "incoming";
    status: "unread" | "read";
    time: string;
    isNew: boolean | undefined;
}

const MessageItem = ({ text, type, status, time, isNew = false, ...props }: MessageItemType) => {
    const showMark = type === "outgoing" && status === "unread";

    return (
        <div
            className={
                isNew ? `${classes.message} ${classes[type]} ${classes.new}` : `${classes.message} ${classes[type]}`
            }
            {...props}
        >
            <p>{text}</p>
            <span className={classes.time}>{time}</span>
            {showMark && <div className={classes.mark}></div>}
        </div>
    );
};

export { MessageItem };
