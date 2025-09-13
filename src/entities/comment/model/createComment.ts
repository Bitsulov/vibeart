import type { CommentType } from "./types.js";

export function createComment({ id = Date.now(), srcImg, authorName, authorId, text = "" }: CommentType) {
    return { id, srcImg, authorName, authorId, text };
}
