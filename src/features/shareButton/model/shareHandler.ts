import type React from "react";

export function shareHandler(
    e: React.MouseEvent,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    onClick: React.MouseEventHandler
) {
    setCount(count => ++count);
    onClick?.(e);
}
