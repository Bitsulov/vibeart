import React from 'react';
import classes from "./postCommentsForm.module.css";
import { globalOnChangeHandler } from "shared/lib/globalOnChangeHandler";

const PostCommentsForm = ({onSubmit, value, setValue, ...props}) => {
	return (
		<form className={classes.comments__form} onSubmit={onSubmit} {...props}>
			<textarea
				className={classes.comments__textarea}
				placeholder="Оставьте комментарий..."
				value={value}
				onChange={e => globalOnChangeHandler(e, setValue)}
			></textarea>
			<button type="submit" className={classes.comments__submit}>Отправить</button>
		</form>
	)
}

export { PostCommentsForm };
