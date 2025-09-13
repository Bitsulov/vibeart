import type { HrefTypesParametersType } from "../model/types.js";

export const hrefTypes = {
    comment: ({ authorId, postId }: HrefTypesParametersType) => `/post/${postId}`,
    answerComment: ({ authorId, postId }: HrefTypesParametersType) => `/post/${postId}`,
    like: ({ authorId, postId }: HrefTypesParametersType) => `/post/${postId}`,
    subscribe: ({ authorId, postId }: HrefTypesParametersType) => `/profile/${authorId}`,
    system: () => null
};
