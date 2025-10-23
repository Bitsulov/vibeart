import classes from "./notifications.module.scss";
import { PageTitle } from "widgets/pageTitle/index.js";
import { NotificationsList } from "widgets/notificationsList/index.js";
import { Layout } from "widgets/layout/index.js";
import { noticesMock } from "entities/notification/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { useTranslation } from "react-i18next";

const Notifications = () => {
	const { t } = useTranslation();

    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.notifications}>
                <PageTitle title={t("Notices")} />
                <NotificationsList noticesList={noticesMock} />
            </main>
        </Layout>
    );
};

export { Notifications };
