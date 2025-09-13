export type NoticeType = "comment" | "answerComment" | "like" | "subscribe" | "system";

export interface NoticeTypesParametersType {
    authorName?: string | undefined | null;
    postName?: string | null | undefined;
}

export interface HrefTypesParametersType {
    authorId?: number | null | undefined;
    postId?: number | null | undefined;
}
