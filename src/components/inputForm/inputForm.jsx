import React, { useEffect, useState } from 'react';
import classes from "./inputForm.module.css";

const InputForm = ({placeholder="", type="text", id="", value="", className="", placeholderClassName="", ...props}) => {
	// id is required
	const [inputValue, setInputValue] = useState(value);
	const [inputClasses, setInputClasses] = useState([classes.input, className].join(" "));
	const [placeholderClasses, setPlaceholderClasses] = useState([classes.placeholder, placeholderClassName].join(" "));

	const onChange = (e) => {
		setInputValue(e.target.value);
		if(e.target.value === "") {
			setInputClasses([classes.input, className].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName].join(" "));
		} else {
			setInputClasses([classes.input, className, classes.focus].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
		}
	}

	return (
		<div className={classes.inputWrapper}>
			<input
				type={type}
				id={id}
				className={inputClasses}
				value={inputValue}
				onChange={onChange}
				{...props}
			>
				
			</input>
			<label className={placeholderClasses} htmlFor={id}>{placeholder}</label>
		</div>
	)
}

export default InputForm;