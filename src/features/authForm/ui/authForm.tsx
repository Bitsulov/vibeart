import React from "react";
import classes from "./authForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import useSubmitSign from "../model/useSubmitSign.jsx";
import { emailChangeHandler } from "../model/emailChangeHandler.js";
import { passwordChangeHandler } from "../model/passwordChangeHandler.js";
import { InputForm } from "../../inputForm/index.js";
import type { RootState } from "app/store/index.js";

const AuthForm = () => {
    const emailValueSign = useSelector((state: RootState) => state.auth.emailValueSign);
    const passwordValueSign = useSelector((state: RootState) => state.auth.passwordValueSign);
    const emailSignError = useSelector((state: RootState) => state.auth.emailSignError);
    const passwordSignError = useSelector((state: RootState) => state.auth.passwordSignError);
    const errorText = useSelector((state: RootState) => state.auth.errorText);

    const dispatch = useDispatch();

    const { submitSign } = useSubmitSign();

    return (
        <section className={classes.authentication}>
            <h2 className={classes.authentication__title}>Войти</h2>
            <form className={classes.authentication__form} onSubmit={submitSign}>
                <InputForm
                    id="emailAuthentication"
                    type="email"
                    placeholder="Email"
                    placeholderClassName={emailSignError ? classes.errorPlaceholder : ""}
                    value={emailValueSign}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailChangeHandler(e, dispatch)}
                    className={emailSignError ? classes.errorInput : ""}
                />
                <InputForm
                    id="passwordAuthentication"
                    type="password"
                    placeholder="Пароль"
                    placeholderClassName={passwordSignError ? classes.errorPlaceholder : ""}
                    minLength={6}
                    value={passwordValueSign}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => passwordChangeHandler(e, dispatch)}
                    className={passwordSignError ? classes.errorInputLeft : ""}
                />
                <p
                    className={
                        errorText ? `${classes.authentication__error} ${classes.show}` : classes.authentication__error
                    }
                >
                    {errorText}
                </p>
                <button className={classes.authentication__submit} type="submit">
                    Отправить
                </button>
            </form>
        </section>
    );
};

export { AuthForm };
