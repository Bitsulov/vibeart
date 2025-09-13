import type { ChatType } from "entities/chats/index.js";
import classes from "./chatList.module.scss";
import { ChatsItem } from "features/chatsItem/index.js";

interface ChatListPropsType {
    list: ChatType[];
}

const ChatList = ({ list }: ChatListPropsType) => {
    return (
        <section className={classes.messages__list}>
            {list.map(chat => {
                return (
                    <ChatsItem
                        id={chat.id}
                        key={chat.id}
                        title={chat.title}
                        srcImg={chat.srcImg}
                        lastMessage={chat.lastMessage}
                        date={chat.date}
                    />
                );
            })}
        </section>
    );
};

export { ChatList };
