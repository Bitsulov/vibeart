import classes from "./error.module.scss";
import { useGetErrorCode } from "../hooks/useGetErrorCode.jsx";
import { getErrorMessage } from "../lib/getErrorMessage.js";
import { Layout } from "widgets/layout/index.js";
import { ErrorInfo } from "widgets/errorInfo/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { useTranslation } from "react-i18next";

const Error = () => {
	const { t } = useTranslation();

    const isPageLoaded = useLoadPageStatus();
    const status = useGetErrorCode();
    const message = t(`errorCodes.${getErrorMessage(+status)}`);

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.error}>
                <ErrorInfo status={+status} message={message} />
            </main>
        </Layout>
    );
};

export { Error };
