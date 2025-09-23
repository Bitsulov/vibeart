import type { AlbumType } from "./types.js";

export function createAlbum({
    id = Date.now(),
    name = "Все работы",
    srcImg = null,
    userId,
	communityId,
    isFirst = true
}: AlbumType) {
    return { id, name, srcImg, userId, communityId, isFirst };
}

export type { AlbumType };
