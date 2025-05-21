import React, { useState } from 'react';
import classes from "./header.module.css";
import logoBlack from "../../assets/images/logo-black.png";
import searchIcon from "../../assets/images/search-white.png";
import Burger from '../burger/burger';
import { Link } from 'react-router-dom';
import parseNumber from '../../utils/parseNumber';

const Header = () => {
	const [noticesLength, setNoticesLength] = useState(5);
	const [chatsLenght, setChatsLength] = useState(5);
	const [avatarImg, setAvatarImg] = useState("/images/ava.jpg");

	return (
		<header>
			<Link className={classes.header__logo} to={"/gallery"}>
				<img src={logoBlack} alt="logo" className={classes.header__logoImg}></img>
				<span className={classes.header__title}>VibeArt</span>
			</Link>
			<form className={classes.header__form} action="#" method="get">
				<input className={classes.header__search} type="text" placeholder="Художник, пост или тег..."></input>
				<button type="submit" className={classes.header__submit}>
					<img src={searchIcon} alt="Найти" className={classes.header__submitImg}></img>
				</button>
			</form>
			<nav className={classes.header__links}>
				<Link to="/messages" className={`${classes.header__link} ${classes.header__linksNotice}`}>
					<svg className={classes.chatsImg}
						version="1.0" xmlns="http://www.w3.org/2000/svg"
						width="480.000000pt" height="456.000000pt" viewBox="0 0 480.000000 456.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g transform="translate(0.000000,456.000000) scale(0.100000,-0.100000)"
						fill="#000000" stroke="none">
						<path d="M668 4544 c-259 -47 -479 -214 -588 -446 -17 -35 -41 -109 -55 -163
						l-25 -98 0 -1196 c0 -1138 1 -1200 19 -1282 73 -330 323 -570 655 -628 39 -7
						348 -11 870 -11 l811 0 535 -321 c294 -177 561 -334 593 -350 87 -41 180 -55
						266 -40 177 32 324 153 381 313 19 53 23 92 27 238 l6 175 87 28 c124 40 210
						95 317 202 80 81 97 105 141 196 94 195 86 71 90 1454 l2 1221 -25 99 c-75
						300 -282 513 -580 597 l-80 23 -1685 2 c-1405 1 -1698 -1 -1762 -13z m3447
						-319 c32 -9 85 -30 117 -47 69 -36 165 -135 197 -202 52 -107 51 -65 51 -1336
						0 -1033 -2 -1193 -15 -1245 -51 -196 -215 -333 -427 -356 -104 -12 -140 -28
						-171 -79 -21 -33 -22 -50 -27 -287 -5 -234 -6 -254 -26 -279 -38 -52 -71 -69
						-132 -69 l-57 0 -565 339 c-310 187 -578 347 -595 355 -26 14 -140 17 -910 21
						l-880 5 -75 37 c-41 20 -94 53 -117 72 -58 50 -119 146 -143 223 -20 64 -20
						91 -20 1257 0 736 4 1207 10 1233 38 164 183 312 351 357 84 23 3347 23 3434
						1z"/>
						<path d="M1370 3218 c-48 -25 -90 -89 -90 -138 0 -48 42 -112 89 -137 l44 -23
						986 0 987 0 44 23 c48 24 90 88 90 137 0 49 -42 113 -90 138 l-44 22 -986 0
						-986 0 -44 -22z"/>
						<path d="M1370 2258 c-48 -25 -90 -89 -90 -138 0 -48 42 -112 89 -137 l44 -23
						986 0 987 0 44 23 c48 24 90 88 90 137 0 49 -42 113 -90 138 l-44 22 -986 0
						-986 0 -44 -22z"/>
						</g>
					</svg>
					<div className={classes.len}>{parseNumber(chatsLenght, false)}</div>
				</Link>
				<Link to="/notifications" className={`${classes.header__link} ${classes.header__linksNotice}`}>
					<svg className={classes.noticeImg}
						version="1.0" xmlns="http://www.w3.org/2000/svg"
						width="427.000000pt" height="512.000000pt" viewBox="0 0 427.000000 512.000000"
						preserveAspectRatio="xMidYMid meet">
						<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
						fill="#000000" stroke="none"
					>
							<path d="M2033 5105 c-141 -38 -250 -141 -299 -280 -13 -37 -19 -97 -23 -228
							l-6 -179 -85 -33 c-194 -74 -360 -178 -502 -313 -185 -177 -314 -378 -392
							-613 -68 -203 -68 -204 -76 -764 -8 -535 -12 -586 -60 -760 -28 -98 -53 -161
							-109 -273 -72 -143 -161 -261 -297 -397 -155 -154 -169 -180 -169 -305 0 -80
							4 -102 23 -138 35 -66 88 -119 150 -149 l57 -28 577 -3 578 -3 6 -27 c32 -148
							91 -264 181 -361 142 -155 304 -234 507 -248 219 -15 412 61 576 226 112 113
							168 218 204 383 l6 27 578 3 577 3 57 28 c62 30 115 83 150 149 19 36 23 58
							23 138 0 126 -15 152 -169 305 -206 205 -332 413 -407 672 -46 161 -51 225
							-59 758 -8 559 -9 561 -75 761 -78 236 -208 440 -393 616 -142 135 -308 239
							-502 313 l-85 33 -6 179 c-5 144 -10 189 -26 235 -78 212 -298 330 -510 273z
							m210 -227 c23 -13 55 -42 72 -66 30 -43 30 -45 33 -190 l3 -147 -210 0 -211 0
							0 133 c0 97 4 143 15 170 49 116 186 162 298 100z m129 -634 c457 -87 837
							-417 982 -854 57 -173 58 -187 66 -735 7 -547 11 -593 67 -785 85 -293 267
							-589 478 -776 95 -85 112 -123 79 -185 -32 -63 89 -59 -1904 -59 -1993 0
							-1872 -4 -1904 59 -33 62 -16 100 79 185 211 187 393 483 478 776 55 191 59
							238 67 785 8 547 9 563 66 735 98 295 315 557 592 714 134 76 318 135 484 156
							93 11 264 4 370 -16z m284 -3631 c-14 -60 -75 -171 -122 -222 -103 -114 -233
							-172 -389 -174 -156 -1 -292 58 -395 170 -50 55 -111 164 -126 226 l-6 27 522
							0 522 0 -6 -27z"/>
						</g>
					</svg>
					<div className={classes.len}>{parseNumber(noticesLength, false)}</div>
				</Link>
				<Link to="#" className={`${classes.header__link} ${classes.header__linksSubscriptions}`}>
					<svg className={classes.subscriptionsImg}
						version="1.0" xmlns="http://www.w3.org/2000/svg"
						width="512.000000pt" height="364.000000pt" viewBox="0 0 512.000000 364.000000"
						preserveAspectRatio="xMidYMid meet">
						<g transform="translate(0.000000,364.000000) scale(0.100000,-0.100000)"
						fill="#000000" stroke="none"
						>
							<path d="M2425 3629 c-298 -44 -536 -248 -627 -539 -33 -108 -33 -311 0 -420
							102 -327 391 -540 734 -541 132 0 213 18 333 76 160 77 268 185 350 347 61
							121 78 209 73 361 -4 98 -10 138 -32 202 -39 114 -98 209 -185 296 -123 123
							-268 194 -444 218 -88 12 -116 12 -202 0z m295 -189 c180 -61 323 -204 381
							-382 31 -95 34 -254 5 -338 -73 -216 -221 -356 -434 -411 -193 -49 -397 4
							-548 145 -79 73 -124 143 -161 248 -34 97 -36 249 -4 348 63 198 250 369 446
							409 81 16 240 7 315 -19z"/>
							<path d="M3980 3105 c-202 -46 -378 -207 -441 -405 -25 -76 -30 -238 -10 -310
							27 -98 81 -190 154 -265 82 -82 137 -117 238 -151 151 -51 303 -39 455 35 398
							197 435 753 67 1005 -132 90 -312 125 -463 91z m251 -171 c76 -23 128 -56 188
							-119 199 -210 131 -543 -136 -667 -174 -82 -399 -26 -515 127 -63 82 -82 144
							-83 260 0 92 3 105 32 168 52 110 151 196 268 233 57 18 182 17 246 -2z"/>
							<path d="M891 3064 c-150 -32 -286 -124 -370 -249 -158 -236 -126 -542 76
							-741 104 -103 274 -174 418 -174 249 0 489 178 566 420 32 98 30 250 -4 348
							-36 103 -81 174 -159 247 -142 135 -338 190 -527 149z m299 -191 c120 -57 194
							-142 232 -267 60 -196 -38 -409 -229 -499 -57 -26 -83 -32 -158 -35 -142 -6
							-246 37 -344 143 -139 151 -139 399 0 550 98 107 194 147 339 142 82 -2 104
							-7 160 -34z"/>
							<path d="M2440 2023 c-306 -30 -599 -157 -813 -353 l-68 -63 -97 46 c-118 56
							-199 81 -317 97 -469 66 -938 -224 -1092 -675 -41 -120 -53 -221 -53 -435 0
							-197 0 -198 28 -251 20 -39 41 -62 77 -84 l48 -30 507 -3 508 -3 6 -40 c9 -58
							38 -110 86 -153 85 -77 -22 -71 1300 -71 1322 0 1215 -6 1300 71 57 51 82 105
							88 186 l5 67 501 3 c356 2 509 7 527 15 44 19 101 75 120 118 16 34 19 68 19
							236 0 213 -12 314 -53 434 -104 305 -346 541 -652 638 -277 87 -600 48 -839
							-100 l-49 -31 -62 53 c-283 240 -668 364 -1025 328z m326 -178 c500 -86 892
							-463 995 -957 17 -84 22 -148 25 -351 5 -269 0 -313 -43 -346 -26 -21 -31 -21
							-1183 -21 -1145 0 -1158 0 -1183 20 -43 34 -47 66 -43 340 3 214 7 272 25 358
							103 490 492 868 986 956 108 19 312 20 421 1z m1553 -216 c298 -76 534 -313
							611 -613 17 -67 20 -111 20 -286 0 -147 -3 -209 -12 -218 -9 -9 -133 -12 -499
							-12 l-486 0 -6 173 c-9 250 -47 403 -153 608 -26 51 -71 125 -100 165 l-53 73
							33 21 c176 108 431 143 645 89z m-3097 -63 c85 -21 218 -78 218 -92 0 -3 -19
							-32 -41 -66 -59 -86 -144 -268 -174 -373 -39 -134 -55 -262 -55 -437 l0 -158
							-489 0 c-417 0 -490 2 -501 15 -9 11 -11 73 -8 242 4 204 7 236 27 298 98 298
							334 514 636 580 103 23 278 19 387 -9z"/>
						</g>
					</svg>
				</Link>
				<Link to={`/profile/${1}`} className={classes.header__linksUser}>
					<img src={avatarImg} alt="User Avatar" className={classes.userAvatar}></img>
				</Link>
			</nav>
			<Burger
				options={[
					{text: "Уведомления", haveCounter: true, counter: noticesLength, href: "/notifications"},
					{text: "Сообщения", haveCounter: true, counter: chatsLenght, href: "/messages"},
					{text: "Подписки", haveCounter: false, href: "#"},
					{text: "Профиль", haveCounter: false, href: `/profile/${1}`},
				]}
			/>
		</header>
	)
}

export default Header;