import classes from "./chatSettingsButton.module.scss";

const ChatSettingsButton = ({ ...props }) => {
    return (
        <button className={classes.chat__userOptions} {...props}>
            ...
        </button>
    );
};

export { ChatSettingsButton };
