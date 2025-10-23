import classes from "./messages.module.scss";
import { Layout } from "widgets/layout/index.js";
import { ChatList } from "widgets/chatList/index.js";
import { PageTitle } from "widgets/pageTitle/index.js";
import { chatsMock } from "entities/chats/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { useTranslation } from "react-i18next";

const Messages = () => {
	const { t } = useTranslation();
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.messages}>
                <PageTitle title={t("Messages")} />
                <ChatList list={chatsMock} />
            </main>
        </Layout>
    );
};

export { Messages };
