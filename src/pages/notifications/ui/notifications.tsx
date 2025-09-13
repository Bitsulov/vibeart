import classes from "./notifications.module.css";
import { PageTitle } from "widgets/pageTitle/index.js";
import { NotificationsList } from "widgets/notificationsList/index.js";
import { Layout } from "widgets/layout/index.js";
import { noticesMock } from "entities/notification/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Notifications = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.notifications}>
                <PageTitle title="Уведомления" />
                <NotificationsList noticesList={noticesMock} />
            </main>
        </Layout>
    );
};

export { Notifications };
