import type React from "react";
import type { ErrorTextType } from "./types.js";

export function contactFormValidation(
    nameValue: string,
    emailValue: string,
    textValue: string,
    setNameErrorText: React.Dispatch<React.SetStateAction<ErrorTextType>>,
    setEmailErrorText: React.Dispatch<React.SetStateAction<ErrorTextType>>,
    setTextErrorText: React.Dispatch<React.SetStateAction<ErrorTextType>>,
    setIsNameError: React.Dispatch<React.SetStateAction<boolean>>,
    setIsEmailError: React.Dispatch<React.SetStateAction<boolean>>,
    setIsTextError: React.Dispatch<React.SetStateAction<boolean>>
) {
	let isError = false;
    if (nameValue === "") {
        setNameErrorText("Это обязательное поле");
        setIsNameError(true);
        isError = true;
    }
    if (emailValue === "") {
        setEmailErrorText("Это обязательное поле");
        setIsEmailError(true);
        isError = true;
    }
    if (textValue === "") {
        setTextErrorText("Это обязательное поле");
        setIsTextError(true);
        isError = true;
    }
	if(isError) return false;
	setIsNameError(false);
	setIsEmailError(false);
	setIsTextError(false);
    return true;
}
