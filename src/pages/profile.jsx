import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/profile.css";
import PostList from '../components/postList/postList';
import AlbumList from '../components/albumList/albumList';
import parseNumber from '../utils/parseNumber';

const Profile = ({getNewNotice}) => {
	const [profileAvatar, setProfileAvatar] = useState("/images/ava-person.jpg");
	const [firstName, setFirstName] = useState("Анна");
	const [secondName, setSecondName] = useState("Иванова");
	const [username, setUserName] = useState("anna_artist");
	const [userDescription, setUserDescription] = useState("Цифровой художник из Москвы. Люблю фэнтези и яркие цвета. Комиссии открыты! fdsakgf jsaDGKF JUgdskfu gdskaufg aDSKUFHdak sufdkshf dksf kdsg fdksugf aksu");
	const [userSubscribers, setUserSubscribers] = useState(12000);
	const [userSubscribes, setUserSubscribes] = useState(45);
	const [userWorks, setUserWorks] = useState(78);

	const [isSubscribe, setIsSubscribe] = useState(false);
	const [selectedAlbum, setSelectedAlbum] = useState(0);
	const [albums, setAlbums] = useState([
		{name: "Все работы", key: 1, postList: [
			{title: "Закат в горах", description: "Описание default 1", likes: 100000, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 1", text: "Текст комментария default 1"}
			]},
			{title: "Эльфийский лес", description: "Описание default 2", likes: 1100, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 2, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 2", text: "Текст комментария default 2"}
			]},
			{title: "Пост 0.3", description: "Описание default 3", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post3.jpeg", key: 3, time: "2025-06-21T21:42:00.00Z", comments: [
				{name: "Комментатор 3", text: "Текст комментария default 3"}
			]},
			{title: "Пост 0.4", description: "Описание default 4", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 4, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 4", text: "Текст комментария default 4"}
			]},
			{title: "Пост 0.5", description: "Описание default 5", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 5, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 5", text: "Текст комментария default 5"}
			]},
			{title: "Пост 0.6", description: "Описание default 6", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post3.jpeg", key: 6, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 6", text: "Текст комментария default 6"}
			]}
		]},
		{name: "Пейзажи", linkImg: "/image/pivo.jpg", alt: "Альбом 1", key: 2, postList: [
			{title: "Закат в горах", description: "Описание поста 1.1", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 1", text: "Текст комментария 1.1"}
			]},
			{title: "Эльфийский лес", description: "Описание поста 1.2", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 2, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 2", text: "Текст комментария 1.2"}
			]},
			{title: "Пост 1.3", description: "Описание поста 1.3", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post3.jpeg", key: 3, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 3", text: "Текст комментария 1.3"}
			]},
			{title: "Пост 1.4", description: "Описание поста 1.4", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 4, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 4", text: "Текст комментария 1.4"}
			]},
			{title: "Пост 1.5", description: "Описание поста 1.5", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 5, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 5", text: "Текст комментария 1.5"}
			]},
			{title: "Пост 1.6", description: "Описание поста 1.6", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 6, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 6", text: "Текст комментария 1.6"}
			]}
		]},
		{name: "Фентези", linkImg: "/image/pivo.jpg", alt: "Альбом 2", key: 3, postList: [
			{title: "Пост 2.1", description: "Описание поста 2.1", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 7", text: "Текст комментария 2.1"}
			]},
			{title: "Пост 2.2", description: "Описание поста 2.2", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 2, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 8", text: "Текст комментария 2.2"}
			]},
			{title: "Пост 2.3", description: "Описание поста 2.3", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 3, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 9", text: "Текст комментария 2.3"}
			]}
		]},
		{name: "Альбом 3", linkImg: "/image/pivo.jpg", alt: "Альбом 3", key: 4, postList: [
			{title: "Пост 3.1", description: "Описание поста 3.1", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 10", text: "Текст комментария 3.1"}
			]},
			{title: "Пост 3.2", description: "Описание поста 3.2", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 2, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 11", text: "Текст комментария 3.2"}
			]},
			{title: "Пост 3.3", description: "Описание поста 3.3", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post2.jpg", key: 3, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 12", text: "Текст комментария 3.3"}
			]},
			{title: "Пост 3.4", description: "Описание поста 3.4", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 4, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 13", text: "Текст комментария 3.4"}
			]},
			{title: "Пост 3.5", description: "Описание поста 3.5", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 5, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 14", text: "Текст комментария 3.5"}
			]},
			{title: "Пост 3.6", description: "Описание поста 3.6", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 6, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 15", text: "Текст комментария 3.6"}
			]},
			{title: "Пост 3.7", description: "Описание поста 3.7", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 7, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 16", text: "Текст комментария 3.7"}
			]},
			{title: "Пост 3.8", description: "Описание поста 3.8", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 8, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 17", text: "Текст комментария 3.8"}
			]},
			{title: "Пост 3.9", description: "Описание поста 3.9", likes: 0, isLiked: false, link: "/post/1", linkImg: "/images/post1.jpg", key: 9, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор 18", text: "Текст комментария 3.9"}
			]}
		]},
		{name: "idhdlzhglfjlgjlsghlfdahkhesruhsiuerhgkrd", linkImg: "/image/pivo.jpg", alt: "Альбом 4", key: 5, postList: [
			{title: "Пост 4.1", description: "Описание поста 4.1", isLiked: false, likes: 0, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор", text: "Текст комментария 4.1"}
			]}
		]},
		{name: "Альбом 5", linkImg: "/image/pivo.jpg", alt: "Альбом 5", key: 6, postList: [
			{title: "Пост 5.1", description: "Описание поста 5.1", isLiked: false, likes: 0, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор", text: "Текст комментария 5.1"}
			]}
		]},
		{name: "Альбом 6", linkImg: "/image/pivo.jpg", alt: "Альбом 6", key: 7, postList: [
			{title: "Пост 6.1", description: "Описание поста 6.1", isLiked: false, likes: 0, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор", text: "Текст комментария 6.1"}
			]}
		]},
		{name: "Альбом 7", linkImg: "/image/pivo.jpg", alt: "Альбом 7", key: 8, postList: [
			{title: "Пост 7.1", description: "Описание поста 7.1", isLiked: false, likes: 0, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор", text: "Текст комментария 7.1"}
			]}
		]},
		{name: "Альбом 8", linkImg: "/image/pivo.jpg", alt: "Альбом 8", key: 9, postList: [
			{title: "Пост 8.1", description: "Описание поста 8.1", isLiked: false, likes: 0, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2025-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор", text: "Текст комментария 8.1"}
			]}
		]},
		{name: "Альбом 9", linkImg: "/image/pivo.jpg", alt: "Альбом 9", key: 10, postList: [
			{title: "Пост 9.1", description: "Описание поста 9.1", isLiked: false, likes: 0, link: "/post/1", linkImg: "/images/post1.jpg", key: 1, time: "2024-06-22T21:42:00.00Z", comments: [
				{name: "Комментатор", text: "Текст комментария 9.1"}
			]}
		]},
		{name: "Альбом 10", linkImg: "/image/pivo.jpg", alt: "Альбом 10", key: 11, postList: [
			
		]},
		{name: "Альбом 11", linkImg: "/image/pivo.jpg", alt: "Альбом 11", key: 12, postList: [
			
		]},
		{name: "Альбом 12", linkImg: "/image/pivo.jpg", alt: "Альбом 12", key: 13, postList: [
			
		]}
	]);

	const [isOwnProfile, setIsOwnProfile] = useState(false);

	// const albumsRef = useRef();
	// const albumsElRef = useRef([]);
	// const [navigation, setNavigation] = useState(true);

	// useEffect(() => {
	// 	let sum = 0;
	// 	albumsElRef.reduce((sum, albumButton) => {
	// 		return sum === 0 ? sum + albumButton.current.style.width : sum + albumButton.current.style.width + 10;
	// 	})
	// 	if(sum <= albumsRef.current.style.width) {
	// 		setNavigation(false);
	// 	} else {
	// 		setNavigation(true);
	// 	}
	// }, [albumsElRef])

	const copyUserName = () => {
		navigator.clipboard.writeText(`@${username}`);
		getNewNotice("Скопировано");
	}

	const setSubscribe = () => {
		if(isSubscribe) {
			setIsSubscribe(false);
			getNewNotice(`Вы отписались от пользователя ${username}`);
		} else {
			setIsSubscribe(true);
			getNewNotice(`Вы подписались на пользователя ${username}`);
		}
	}

  	return (
		<main className="profile">
			<section className="info">
				<img src={profileAvatar} alt="Person Avatar" className="info__avatar"></img>
				<h1 className="info__username">{firstName} {secondName}</h1>
				<span className="info__usertag">
					@{username}
					<svg 
						className="copyImg"
						onClick={copyUserName}
						version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"
					>
						<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
							<path d="M1745 5108 c-27 -5 -87 -27 -133 -48 -108 -51 -222 -161 -270 -260
								-66 -136 -62 -31 -62 -1702 0 -1049 3 -1533 11 -1570 19 -94 85 -213 159 -288
								75 -74 194 -140 288 -159 74 -15 2630 -15 2704 0 97 20 211 83 286 158 76 76
								142 194 161 289 8 36 11 433 11 1260 0 1302 1 1267 -53 1402 -52 127 -85 168
								-377 463 -303 307 -365 358 -498 409 -150 59 -134 58 -1200 57 -571 -1 -998
								-5 -1027 -11z m2044 -323 c117 -28 149 -52 434 -335 255 -252 270 -269 310
								-349 l42 -84 3 -1201 c2 -926 0 -1211 -10 -1246 -16 -59 -105 -151 -164 -168
								-60 -17 -2568 -17 -2628 0 -55 16 -148 109 -164 164 -9 32 -12 395 -12 1535
								l0 1494 24 51 c27 58 91 117 150 138 63 22 1921 23 2015 1z"/>
							<path d="M2237 3616 c-49 -18 -64 -32 -89 -80 -37 -73 -13 -153 62 -203 l33
								-23 847 0 847 0 33 23 c48 32 72 69 77 119 7 58 -23 118 -74 149 l-38 24 -830
								2 c-677 2 -837 0 -868 -11z"/>
							<path d="M2237 2976 c-49 -18 -64 -32 -89 -80 -37 -73 -13 -153 62 -203 l33
								-23 847 0 847 0 33 23 c48 32 72 69 77 119 7 58 -23 118 -74 149 l-38 24 -830
								2 c-677 2 -837 0 -868 -11z"/>
							<path d="M2237 2336 c-49 -18 -64 -32 -89 -80 -37 -73 -13 -153 62 -203 l33
								-23 847 0 847 0 33 23 c48 32 72 69 77 119 7 58 -23 118 -74 149 l-38 24 -830
								2 c-677 2 -837 0 -868 -11z"/>
							<path d="M725 4583 c-102 -14 -220 -66 -307 -137 -69 -56 -150 -174 -180 -264
								l-23 -67 -3 -1790 c-3 -1993 -7 -1862 66 -2007 45 -90 151 -199 239 -246 34
								-18 96 -41 139 -52 75 -19 115 -20 1418 -20 1112 0 1352 3 1407 14 207 44 391
								222 444 431 21 83 20 276 -1 321 -24 50 -68 77 -133 82 -70 5 -115 -22 -148
								-88 -19 -37 -23 -61 -23 -140 0 -115 -24 -176 -90 -233 -84 -72 13 -68 -1471
								-65 -1304 3 -1335 3 -1374 23 -50 25 -105 80 -130 130 -20 39 -20 70 -20 1820
								l0 1780 22 40 c28 53 89 110 138 131 25 10 84 19 156 23 96 6 120 11 146 29
								63 45 83 149 40 213 -37 56 -96 79 -197 78 -47 -1 -98 -4 -115 -6z"/>
						</g>
					</svg>
				</span>
				{isOwnProfile ? 
					<div className="info__buttons-own">
						<button className="info__buttons-item info__edit-profileBtn">Редактировать профиль</button>
						<button className="info__buttons-item info__settingsBtn">Настройки</button>
						<button className="info__buttons-item info__add-postBtn">Добавить пост</button>
						<button className="info__buttons-item info__manage-albumsBtn">Альбомы</button>
					</div>
				:
					<div className="info__buttons">
						<button
							className={isSubscribe ? "info__buttons-item info__unscribeBtn" : "info__buttons-item info__subscribeBtn"}
							id="subscribe"
							onClick={setSubscribe}
						>
							{isSubscribe ? "Отписаться" : "Подписаться"}
						</button>
						<Link to="#" className="info__buttons-item info__messageBtn">Написать</Link>
					</div>
				}
				<p className="info__description">{userDescription}</p>
				<div className="info__stats">
					<span className="statsSubscribers" title={userSubscribers}>Подписчиков: {parseNumber(userSubscribers)}</span> <span className="spliter">|</span> <span className="statsSubscribes" title={userSubscribes}>Подписки: {parseNumber(userSubscribes)}</span> <span className="spliter">|</span> <span className="statsWorks" title={userWorks}>Работ: {userWorks}</span>
				</div>
			</section>
			<section className="posts">
				<AlbumList /*showNavigation={navigation} ref={albumsRef} refs={albumsElRef}*/ albumList={albums} selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
				<PostList posts={albums[selectedAlbum].postList} />
			</section>
		</main>
  	)
}

export default Profile;