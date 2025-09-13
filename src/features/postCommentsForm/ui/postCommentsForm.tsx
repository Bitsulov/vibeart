import classes from "./postCommentsForm.module.css";
import { globalOnChangeHandler } from "shared/lib/globalOnChangeHandler.js";
import type React from "react";
import type { SetStateAction } from "react";

interface PostCommentsFormType {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    value: string;
    setValue: React.Dispatch<SetStateAction<string>>;
}

const PostCommentsForm = ({ onSubmit, value, setValue, ...props }: PostCommentsFormType) => {
    return (
        <form className={classes.comments__form} onSubmit={onSubmit} {...props}>
            <textarea
                className={classes.comments__textarea}
                placeholder="Оставьте комментарий..."
                value={value}
                onChange={e => globalOnChangeHandler(e, setValue)}
            ></textarea>
            <button type="submit" className={classes.comments__submit}>
                Отправить
            </button>
        </form>
    );
};

export { PostCommentsForm };
