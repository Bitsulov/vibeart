import type { CommentType } from "entities/comment/index.js";
import type React from "react";
import type { defaultAddedObjectType } from "./types.js";

export function submitPostCommentsFormHandler(
    e: React.FormEvent,
    commentsList: CommentType[],
    setCommentsList: React.Dispatch<React.SetStateAction<CommentType[]>>,
    valueInput: string,
    setValueInput: React.Dispatch<React.SetStateAction<string>>,
    defaultAddedObject: defaultAddedObjectType
) {
    e.preventDefault();
    if (valueInput !== "") {
        setCommentsList([...commentsList, defaultAddedObject]);
        setValueInput("");
    }
}
