import React, { useEffect, useState } from 'react';
import classes from "./inputForm.module.css";
import { buttonTypes } from '../config/buttonTypes';
import { onChangeValue } from '../model/onChangeValue';
import { toggleButtonHandler } from '../model/toggleButtonHandler';

const InputForm = ({placeholder="", type="text", id="", value, className="", placeholderClassName="", onChange, minLength, ...props}) => {
	// id is required
	const [inputClasses, setInputClasses] = useState([classes.input, className].join(" "));
	const [placeholderClasses, setPlaceholderClasses] = useState([classes.placeholder, placeholderClassName].join(" "));
	const [isPassword, setIsPassword] = useState(false);
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [currentType, setCurrentType] = useState(null);
	const [defaultClass, setDefaultClass] = useState(null);

	useEffect(() => {
		if(currentType) {
			if(isShowPassword) {
				setCurrentType("text");
			} else {
				setCurrentType("password");
			}
		} else {
			setCurrentType(type);
			if(type === "password") {
				setIsPassword(true);
				setDefaultClass(classes.inputLeft);
				setInputClasses([classes.inputLeft, className].join(" "));
			} else {
				setDefaultClass(classes.input);
				setInputClasses([classes.input, className].join(" "));
			}
		}
	}, [type, isShowPassword])

	useEffect(() => {
		if(value || props.defaultValue) {
			setInputClasses([defaultClass, className, classes.focus].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
		} else {
			setInputClasses([defaultClass, className].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName].join(" "));
		}
	}, [value, props.defaultValue, className, placeholderClassName, defaultClass])

	useEffect(() => {
		if(value || props.defaultValue) {
			setInputClasses([defaultClass, className, classes.focus].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
		}
	}, [])

	const createButton = (currentType, onClick) => {
		const Button = buttonTypes[currentType];
		return <Button onClick={onClick} />
	}

	return (
		<div className={classes.generalWrapper}>
			<div className={classes.inputWrapper}>
				<input
					type={currentType}
					id={id}
					className={inputClasses}
					value={value}
					minLength={minLength ?? ""}
					onChange={e => onChangeValue(e, onChange, classes, defaultClass, className, placeholderClassName, setInputClasses, setPlaceholderClasses)}
					{...props}
				></input>
				{isPassword && createButton(currentType, e => toggleButtonHandler(e, setIsShowPassword))}
				<label className={placeholderClasses} htmlFor={id}>{placeholder}</label>
			</div>
		</div>
	)
}

export { InputForm };
