import type React from "react";

export function toggleButtonHandler(
    e: React.MouseEvent,
    setIsShowPassword: React.Dispatch<React.SetStateAction<boolean>>
) {
    setIsShowPassword(state => !state);
}
