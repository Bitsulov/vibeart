import classes from "./errorInfo.module.scss";

interface ErrorInfoType {
    status: number;
    message: string | undefined;
}

const ErrorInfo = ({ status, message, ...props }: ErrorInfoType) => {
    return (
        <div className={classes.error__inner} {...props}>
            <h1 className={classes.error__title}>Произошла ошибка с кодом {status}</h1>
            <p className={classes.error__text}>{message}</p>
        </div>
    );
};

export { ErrorInfo };
