import type { ChatType } from "./types.js";

export function createChat({
    id = Date.now(),
    title = "getChatNameError",
    srcImg,
    lastMessage = "",
    date = new Date().toISOString()
}: ChatType) {
    return { id, title, srcImg, lastMessage, date };
}
