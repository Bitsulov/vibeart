import { useState } from "react";
import classes from "./chat.module.scss";
import { userChatMock } from "entities/user/index.js";
import { chatMessagesMock } from "entities/message/index.js";
import { ChatContainer } from "widgets/chatContainer/index.js";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Chat = () => {
    const isPageLoaded = useLoadPageStatus();

    const [messages, setMessages] = useState(chatMessagesMock);

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.chat}>
                <ChatContainer messages={messages} setMessages={setMessages} userInfo={userChatMock} />
            </main>
        </Layout>
    );
};

export { Chat };
