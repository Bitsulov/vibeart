import type React from "react";
import classesStyle from "../ui/inputForm.module.scss";

export function onChangeValue(
    e: React.ChangeEvent<HTMLInputElement>,
    classes: typeof classesStyle,
    defaultClass: string | null,
    className: string,
    placeholderClassName: string,
    setInputClasses: React.Dispatch<React.SetStateAction<string>>,
    setPlaceholderClasses: React.Dispatch<React.SetStateAction<string>>,
	onChange?: React.ChangeEventHandler<HTMLInputElement>
) {
    if (e.target.value === "") {
        setInputClasses([defaultClass, className].join(" "));
        setPlaceholderClasses([classes.placeholder, placeholderClassName].join(" "));
    } else {
        setInputClasses([defaultClass, className, classes.focus].join(" "));
        setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
    }
    onChange?.(e);
}
