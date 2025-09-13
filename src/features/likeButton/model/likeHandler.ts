import type React from "react";

export function likeHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    isliked: boolean,
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
) {
    if (isliked) {
        setCount(count => --count);
        setIsLiked(false);
    } else {
        setCount(count => ++count);
        setIsLiked(true);
    }
    onClick?.(e);
}
