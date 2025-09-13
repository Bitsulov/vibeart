import React from "react";

export function albumClickHandler(
    e: React.MouseEvent,
    setSelectedAlbum: React.Dispatch<React.SetStateAction<number>>,
    albumId: number
) {
    setSelectedAlbum(albumId);
}
