export interface NotificationType {
    id: number;
    authorName?: string | undefined;
    authorId?: number | null | undefined;
    noticeType: "comment" | "like" | "subscribe" | "system";
    date: string;
    srcImg?: string | undefined;
    postName?: string | null | undefined;
    postId?: number | null | undefined;
}
