import type React from "react";

function navigationBurgerClickHandler(e: React.MouseEvent) {
    e.stopPropagation();
}

export { navigationBurgerClickHandler };
