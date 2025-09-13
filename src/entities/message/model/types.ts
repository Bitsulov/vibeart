export interface MessageType {
    id: number;
    text: string;
    type: "incoming" | "outgoing";
    time: string;
    status: "unread" | "read";
    isNew: boolean;
}
