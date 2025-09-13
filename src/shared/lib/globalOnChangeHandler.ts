import type React from "react";

export function globalOnChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
) {
    setter(e.target.value);
}
