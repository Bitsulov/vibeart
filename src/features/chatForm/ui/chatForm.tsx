import type React from "react";
import classes from "./chatForm.module.css";
import { globalOnChangeHandler } from "shared/lib/globalOnChangeHandler.js";

interface ChatFormProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatForm = ({ inputValue, setInputValue, onSubmit, ...props }: ChatFormProps) => {
    return (
        <form className={classes.chat__form} onSubmit={onSubmit} {...props}>
            <input
                className={classes.chat__formInput}
                value={inputValue}
                onChange={e => globalOnChangeHandler(e, setInputValue)}
                type="text"
                placeholder="Напишите сообщение..."
            ></input>
            <input type="submit" value="" className={classes.chat__formSend}></input>
        </form>
    );
};

export { ChatForm };
