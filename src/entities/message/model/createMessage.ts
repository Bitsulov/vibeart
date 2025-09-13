import type { MessageType } from "./types.js";

export function createMessage({
    id = Date.now(),
    text,
    type,
    time = new Date().toISOString(),
    isNew = false,
    status = "unread"
}: MessageType) {
    return { id, text, type, time, status, isNew };
}
