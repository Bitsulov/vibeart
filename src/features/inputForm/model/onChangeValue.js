function onChangeValue(e, onChange, classes, defaultClass, className, placeholderClassName, setInputClasses, setPlaceholderClasses) {
	if(e.target.value === "") {
		setInputClasses([defaultClass, className].join(" "));
		setPlaceholderClasses([classes.placeholder, placeholderClassName].join(" "));
	} else {
		setInputClasses([defaultClass, className, classes.focus].join(" "));
		setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
	}
	onChange?.(e);
}

export {onChangeValue}