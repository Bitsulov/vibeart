import React from 'react';
import classes from "./sliderNavButton.module.css";

const SliderNavButton = ({type, swiper, ref, ...props}) => {
	return (
		type === "prev" ?
		<button
			ref={ref}
			onClick={() => swiper.current.slidePrev()}
		>
			<svg
				className={`${classes.arrowImg} ${classes.arrowImgLeft}`}
				{...props}
				version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"
			>
				<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
					<path d="M3543 5106 c-23 -7 -56 -23 -75 -34 -18 -12 -560 -549 -1204 -1194
					-1076 -1077 -1173 -1177 -1188 -1222 -20 -63 -20 -129 0 -192 15 -45 113 -146
					1193 -1228 1045 -1047 1183 -1181 1236 -1207 77 -37 139 -38 215 -3 70 32 270
					226 307 298 36 71 41 146 13 221 -22 58 -56 94 -999 1038 l-976 977 972 973
					c1062 1062 1023 1018 1023 1134 0 99 -27 145 -162 280 -131 130 -178 160 -266
					168 -26 3 -66 -1 -89 -9z"/>
				</g>
			</svg>
		</button>
		: type === "next" ?
		<button
			ref={ref}
			onClick={() => swiper.current.slideNext()}
		>
			<svg
				className={`${classes.arrowImg} ${classes.arrowImgRight}`}
				{...props}
				version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"
			>
				<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
					<path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
					-286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
					c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
					-291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
					1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
					-1230 1193 -72 26 -136 26 -207 -1z"/>
				</g>
			</svg>
		</button>
		: ""
	)
}

export default SliderNavButton;