import React, { useEffect, useState } from 'react';
import classes from "./inputForm.module.css";

const InputForm = ({placeholder="", type="text", id="", value, className="", placeholderClassName="", onChange, minLength, ...props}) => {
	// id is required
	const [inputClasses, setInputClasses] = useState([classes.input, className].join(" "));
	const [placeholderClasses, setPlaceholderClasses] = useState([classes.placeholder, placeholderClassName].join(" "));
	const [isPassword, setIsPassword] = useState(false);
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [currentType, setCurrentType] = useState(null);

	const onChangeValue = (e) => {
		let defaultClass = isPassword ? classes.inputLeft : classes.input;
		if(e.target.value === "") {
			setInputClasses([defaultClass, className].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName].join(" "));
		} else {
			setInputClasses([defaultClass, className, classes.focus].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
		}
		onChange?.(e);
	}

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
				setInputClasses([classes.inputLeft, className].join(" "));
			} else {
				setInputClasses([classes.input, className].join(" "));
			}
		}
	}, [type, isShowPassword])

	useEffect(() => {
		let defaultClass = type === "password" ? classes.inputLeft : classes.input;
		if(value || props.defaultValue) {
			setInputClasses([defaultClass, className, classes.focus].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
		} else {
			setInputClasses([defaultClass, className].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName].join(" "));
		}
	}, [className, ])

	useEffect(() => {
		if(value || props.defaultValue) {
			let defaultClass = type === "password" ? classes.inputLeft : classes.input;
			setInputClasses([defaultClass, className, classes.focus].join(" "));
			setPlaceholderClasses([classes.placeholder, placeholderClassName, classes.focus].join(" "));
		}
	}, [])

	return (
		<div className={classes.generalWrapper}>
			<div className={classes.inputWrapper}>
				<input
					type={currentType}
					id={id}
					className={inputClasses}
					value={value}
					minLength={minLength ?? ""}
					onChange={onChangeValue}
					{...props}
				></input>
				{isPassword ? 
					isShowPassword ?
						<div className={classes.inputRight}>
							<svg className={classes.inputButtonHide} onClick={() => setIsShowPassword(false)}
								version="1.0" xmlns="http://www.w3.org/2000/svg"
								width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
								preserveAspectRatio="xMidYMid meet">

								<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
									fill="#000000" stroke="none">
								<path d="M4260 4470 c-14 -6 -147 -133 -297 -282 l-271 -271 -129 50 c-208 83
									-406 135 -638 170 -184 27 -571 24 -764 -6 -509 -78 -959 -281 -1385 -624
									-135 -108 -391 -366 -500 -502 -118 -149 -264 -368 -272 -410 -11 -60 4 -100
									86 -223 240 -363 584 -709 930 -937 58 -38 107 -70 109 -72 3 -2 -104 -113
									-236 -246 -207 -207 -242 -247 -248 -280 -11 -60 3 -107 44 -148 41 -41 88
									-55 148 -44 34 6 227 196 1831 1798 1317 1317 1795 1801 1803 1826 22 67 -2
									139 -63 184 -31 23 -111 32 -148 17z m-1360 -655 c172 -26 363 -76 514 -135
									l30 -11 -164 -164 -164 -164 -27 19 c-52 38 -215 110 -294 132 -106 28 -344
									31 -449 5 -183 -46 -328 -128 -462 -261 -133 -134 -215 -280 -261 -462 -27
									-108 -24 -334 5 -444 23 -83 89 -234 131 -295 l20 -31 -203 -203 -203 -203
									-95 59 c-332 209 -669 527 -878 829 l-51 74 50 73 c177 256 485 564 746 748
									352 248 768 405 1181 448 124 13 448 5 574 -14z m-198 -634 c62 -16 178 -64
									178 -74 0 -1 -195 -197 -434 -436 l-434 -434 -27 52 c-36 73 -65 191 -65 270
									1 409 394 721 782 622z"/>
								<path d="M4137 3462 c-59 -59 -107 -112 -106 -117 0 -6 39 -40 87 -77 205
									-157 475 -445 621 -660 l32 -48 -41 -60 c-172 -254 -471 -557 -735 -746 -452
									-324 -980 -489 -1505 -470 -164 5 -215 11 -383 42 l-89 17 -129 -129 c-93 -93
									-125 -130 -115 -136 28 -16 265 -69 401 -90 187 -29 568 -31 750 -5 645 95
									1183 373 1675 866 176 177 291 316 420 509 129 192 129 209 12 388 -112 170
									-265 357 -427 520 -137 138 -328 304 -349 304 -6 0 -60 -48 -119 -108z"/>
								<path d="M3336 2661 l-138 -138 -13 -79 c-16 -92 -73 -214 -134 -287 -94 -113
									-238 -198 -375 -222 l-79 -13 -141 -141 c-77 -77 -137 -143 -134 -146 12 -12
									165 -34 239 -35 253 -1 486 98 674 285 193 193 278 396 279 665 1 125 -16 250
									-32 250 -4 0 -69 -62 -146 -139z"/>
								</g>
							</svg>
						</div>
					:
						<div className={classes.inputRight}>
							<svg className={classes.inputButtonShow} onClick={() => setIsShowPassword(true)}
								version="1.0" xmlns="http://www.w3.org/2000/svg"
								width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
								preserveAspectRatio="xMidYMid meet">
								<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
									fill="#000000" stroke="none">
								<path d="M2435 4103 c-596 -48 -1152 -286 -1706 -731 -224 -180 -588 -550
									-691 -703 -33 -49 -43 -104 -28 -157 28 -105 488 -590 791 -833 1158 -931
									2448 -885 3664 130 187 156 579 568 632 664 20 36 25 92 13 136 -14 53 -161
									229 -374 448 -402 414 -794 692 -1225 868 -332 136 -748 205 -1076 178z m392
									-368 c152 -20 241 -39 356 -75 398 -124 769 -351 1142 -700 117 -109 327 -329
									365 -381 l19 -26 -152 -158 c-336 -350 -647 -585 -1012 -765 -335 -166 -617
									-242 -951 -257 -688 -30 -1394 327 -2044 1033 -74 80 -136 150 -138 155 -6 16
									424 436 550 537 313 249 659 442 972 542 127 41 285 77 391 89 50 6 101 13
									115 15 67 9 282 4 387 -9z"/>
								<path d="M2396 3455 c-196 -41 -366 -133 -497 -272 -101 -107 -180 -248 -221
									-398 -31 -115 -31 -335 0 -450 25 -90 85 -221 134 -293 114 -167 315 -307 523
									-364 114 -31 335 -31 450 0 320 87 569 336 656 657 18 65 22 107 22 225 0 118
									-4 160 -22 225 -87 321 -339 573 -656 656 -104 27 -293 34 -389 14z m292 -360
									c98 -23 179 -70 258 -149 220 -220 220 -552 0 -772 -44 -44 -95 -83 -133 -103
									-220 -111 -476 -68 -646 107 -210 218 -210 546 0 764 136 140 331 198 521 153z"/>
								</g>
							</svg>
						</div>
				: ""}
				<label className={placeholderClasses} htmlFor={id}>{placeholder}</label>
			</div>
		</div>
	)
}

export default InputForm;