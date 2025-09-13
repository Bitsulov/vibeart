import HideButton from "../ui/hideButton.jsx";
import ShowButton from "../ui/showButton.jsx";
import type { HideButtonType } from "../ui/hideButton.jsx";
import type { ShowButtonType } from "../ui/showButton.jsx";
import type { FC } from "react";

interface buttonTypesType {
    text: FC<HideButtonType>;
    email: FC<HideButtonType>;
    password: FC<ShowButtonType>;
}

const buttonTypes: buttonTypesType = {
    text: HideButton,
    email: HideButton,
    password: ShowButton
};

export { buttonTypes };
