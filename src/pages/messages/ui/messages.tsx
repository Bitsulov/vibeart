import classes from "./messages.module.scss";
import { Layout } from "widgets/layout/index.js";
import { ChatList } from "widgets/chatList/index.js";
import { PageTitle } from "widgets/pageTitle/index.js";
import { chatsMock } from "entities/chats/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Messages = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.messages}>
                <PageTitle title="Сообщения" />
                <ChatList list={chatsMock} />
            </main>
        </Layout>
    );
};

export { Messages };
