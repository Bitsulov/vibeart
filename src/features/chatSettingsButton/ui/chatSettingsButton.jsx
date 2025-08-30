import React from 'react';
import classes from "./chatSettingsButton.module.css";

const ChatSettingsButton = ({...props}) => {
	return (
		<button className={classes.chat__userOptions} {...props}>...</button>
	)
}

export { ChatSettingsButton };
