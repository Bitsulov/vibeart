import type { AlbumType } from "./types.js";

export function createAlbum({
    id = Date.now(),
    name = "Все работы",
    srcImg = null,
    userId,
    isFirst = true
}: AlbumType) {
    return { id, name, srcImg, userId, isFirst };
}

export type { AlbumType };
