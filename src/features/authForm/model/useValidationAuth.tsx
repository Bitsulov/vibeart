import type { RootState } from "app/store/index.js";
import { setEmailSignError, setPasswordSignError, setErrorText } from "./authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const useValidationAuth = () => {
    const emailValueSign = useSelector((state: RootState) => state.auth.emailValueSign);
    const passwordValueSign = useSelector((state: RootState) => state.auth.passwordValueSign);

    const dispatch = useDispatch();

    const validateAuthForm = () => {
        let email = emailValueSign.trim();
        let password = passwordValueSign.trim();
        if (email === "" && password === "") {
            dispatch(setEmailSignError(true));
            dispatch(setPasswordSignError(true));
            dispatch(setErrorText("Заполните пустые поля"));
            return false;
        } else if (email === "") {
            dispatch(setEmailSignError(true));
            dispatch(setPasswordSignError(false));
            dispatch(setErrorText("Заполните email"));
            return false;
        } else if (password === "") {
            dispatch(setPasswordSignError(true));
            dispatch(setEmailSignError(false));
            dispatch(setErrorText("Заполните пароль"));
            return false;
        } else if (email.indexOf("--") !== -1 || password.indexOf("--") !== -1) {
            dispatch(setErrorText("Произошла ошибка"));
            return false;
        } else {
            dispatch(setEmailSignError(false));
            dispatch(setPasswordSignError(false));
            dispatch(setErrorText(""));
            return true;
        }
    };

    return { validateAuthForm };
};

export default useValidationAuth;
