import type React from "react";

export function modalClickHandler(e: React.MouseEvent) {
    e.stopPropagation();
}
