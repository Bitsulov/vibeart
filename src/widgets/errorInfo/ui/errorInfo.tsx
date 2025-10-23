import { useTranslation } from "react-i18next";
import classes from "./errorInfo.module.scss";

interface ErrorInfoType {
    status: number;
    message: string | undefined;
}

const ErrorInfo = ({ status, message, ...props }: ErrorInfoType) => {
	const { t } = useTranslation();

    return (
        <div className={classes.error__inner} {...props}>
            <h1 className={classes.error__title}>{t("ErrorCodeMessage", {status: status})}</h1>
            <p className={classes.error__text}>{message}</p>
        </div>
    );
};

export { ErrorInfo };
