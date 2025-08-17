import React, { useState } from 'react';
import "../styles/post.css";
import PostCommentsList from '../components/postCommentsList/postCommentsList';
import UseHashScroll from '../hooks/useHashScroll';
import { checkDateYear } from '../utils/dates';

const Post = ({getNewNotice}) => {
	UseHashScroll(-70);

	const [likes, setLikes] = useState(0);
	const [isLiked, setIsLiked] = useState(false);
	const [reposts, setReposts] = useState(0);
	const [tags, setTags] = useState(["digital", "арт", "портрет", "agfsagfagagfa", "agfsagfagagfa", "fdsfsf", "sgfsgf", "jdryyyjfdxHr", "vbysba5en", "yb5sby5rnsn", "srbtytr", "bry", "bru6ebus", "brtyrrty", "yrty", "gfasg"]);
	const [description, setDescription] = useState("Здесь будет описание работы, вдохновение автора и т.п.");
	const [title, setTitle] = useState("Название поста");
	const [name, setName] = useState("artist_name");
	const [date, setDate] = useState("2025-05-13T08:00:00.00Z");
	const [postDate, setPostDate] = useState(checkDateYear(date));
	const [comments, setComments] = useState([
		{id: 1, src: "/images/ava.jpg", name: "Комментатор 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit est, dictum eget diam in, ultricies efficitur turpis. Donec nec ante euismod, dapibus turpis at, congue risus. Suspendisse ut elit turpis. Suspendisse ut egestas urna. In hac habitasse platea dictumst. Sed eleifend pellentesque erat vitae viverra. Текст комментария 1"},
		{id: 2, src: "/images/ava.jpg", name: "Комментатор 2", text: "Текст комментария 2"},
		{id: 3, src: "/images/ava.jpg", name: "Комментатор 3", text: "Текст комментария 3"},
		{id: 4, src: "/images/ava.jpg", name: "Комментатор 4", text: "Текст комментария 4"},
		{id: 5, src: "/images/ava.jpg", name: "Комментатор 5", text: "Текст комментария 5"},
	])
	const [userInfo, setUserInfo] = useState({name: "anna_artist", src: "/images/ava.jpg"});
	const [textAreaValue, setTextAreaValue] = useState("");

	const like = () => {
		if(isLiked) {
			setLikes(likes - 1);
			setIsLiked(false);
		} else {
			setLikes(likes + 1);
			setIsLiked(true);
		}
	}

	const changeValue = e => {
		setTextAreaValue(e.target.value);
	}

	const addComment = e => {
		e.preventDefault();
		if(textAreaValue !== "") {
			setComments([...comments, {src: userInfo.src, name: userInfo.name, text: textAreaValue.trim()}]);
			setTextAreaValue("");
		}
	}

	const copyTag = (tag) => {
		navigator.clipboard.writeText(tag);
		getNewNotice("Тег скопирован");
	}

	return (
		<main className="post">
			<section className="post__card">
				<img src="/images/post1.jpg" alt="Artwork" className="post__image"></img>
				<div className="post__info">
					<div className="post__author-info">
						<img src="/images/ava-person.jpg" alt="Аватар автора" className="post__avatar"></img>
						<p className="post__author">от <a href="#" className="post__author-link">{name}</a></p>
					</div>
					<h2 className="post__title">{title}</h2>
					<p className="post__description">{description}</p>
					<ul className="post__tags">
						{tags.map((tag, i) => (
							<li
								key={i}
								className="post__tag"
								onClick={() => copyTag(tag)}
							>
								#{tag}
							</li>
						))}
					</ul>
					<div className="post__meta">
						<span className="post__date">{postDate}</span>
						<div className="post__buttons">
							<button className="post__like" onClick={like}>
								<svg className={isLiked ? "like-img like-active" : "like-img"}
									width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								{likes}
							</button>
							<button className="post__share">
								<svg className="share-img"
									version="1.0" xmlns="http://www.w3.org/2000/svg"
									width="351.000000pt" height="257.000000pt" viewBox="0 0 351.000000 257.000000"
									preserveAspectRatio="xMidYMid meet">
									<g transform="translate(0.000000,257.000000) scale(0.100000,-0.100000)"
										fill="#000000" stroke="none">
									<path d="M2151 2549 c-43 -17 -78 -48 -97 -86 -15 -32 -19 -71 -24 -233 l-5
										-195 -340 -6 c-351 -7 -418 -13 -578 -59 -479 -134 -864 -504 -1021 -977 -59
										-178 -68 -244 -73 -560 -5 -285 -5 -293 17 -337 27 -57 108 -102 164 -92 67
										13 97 45 163 170 83 157 158 261 273 376 208 208 451 338 750 401 93 20 136
										22 375 23 l270 1 6 -170 c6 -180 12 -207 61 -251 37 -35 63 -44 120 -44 37 0
										64 7 89 23 20 12 291 228 602 481 535 434 567 461 588 510 19 45 20 56 10 94
										-6 24 -19 54 -27 68 -19 28 -1149 839 -1200 860 -38 16 -88 17 -123 3z m635
										-541 c310 -222 565 -408 568 -414 2 -6 1 -15 -2 -21 -7 -9 -1108 -903 -1131
										-917 -6 -4 -18 -2 -26 4 -12 10 -15 44 -15 172 0 177 -7 207 -59 251 -54 45
										-93 50 -371 44 -194 -4 -283 -10 -370 -25 -502 -89 -926 -406 -1154 -861 -33
										-64 -51 -90 -58 -83 -17 17 -4 552 16 637 42 179 120 360 218 503 68 98 210
										243 314 319 102 75 255 154 373 193 175 57 226 63 616 69 348 6 361 7 395 28
										20 12 46 40 58 61 20 37 22 52 22 225 0 102 3 192 6 201 3 9 13 16 22 16 8 0
										269 -181 578 -402z"/>
									</g>
								</svg>
								{reposts}
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="comments" id="comments">
				<h3 className="comments__title">Комментарии ({comments.length})</h3>
				<PostCommentsList commentsList={comments} />
			</section>
			<form className="comments__form" onSubmit={addComment}>
				<textarea
					className="comments__textarea"
					placeholder="Оставьте комментарий..."
					value={textAreaValue}
					onChange={changeValue}
				></textarea>
				<button type="submit" className="comments__submit">Отправить</button>
			</form>
		</main>
	)
}

export default Post;