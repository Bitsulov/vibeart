import React, { useEffect, useState } from 'react';
import classes from "./galleryItem.module.css";
import { Link } from 'react-router-dom';
import { monthesRu } from '../../utils/monthesRu';
import parseNumber from '../../utils/parseNumber';
import { checkDateYear } from '../../utils/dates';

const GalleryItem = ({post, ...props}) => {
	const [postDate, setPostDate] = useState(checkDateYear(post.date));
	const [isLiked, setIsLiked] = useState(post.isLiked);
	const [likes, setLikes] = useState(post.likes);
	const [reposts, setReposts] = useState(post.reposts);

	useEffect(() => {
		setPostDate(checkDateYear(post.date));
		setIsLiked(post.isLiked);
		setLikes(post.likes);
		setReposts(post.reposts);
	}, [post])

	const like = () => {
		if(isLiked) {
			setIsLiked(false);
			setLikes(likes - 1);
		} else {
			setIsLiked(true);
			setLikes(likes + 1);
		}
	}

	return (
		<div className={classes.gallery__item} {...props}>
			<Link className={classes.gallery__itemImageLink} to={`/post/${post.id}`}>
				<img src={post.image} alt="Artwork" className={classes.gallery__itemImage} />
			</Link>
			<div className={classes.gallery__itemInfo}>
				<Link to={`/profile/${post.authorId}`} className={classes.gallery__itemAuthorWrapper}>
					<img src={post.authorImg} alt="avatar"  className={classes.gallery__itemAuthorImg} />
					<h3 className={classes.gallery__itemAuthorName}>{post.authorName}</h3>
				</Link>
				<Link className={classes.gallery__itemTextLink} to={`/post/${post.id}`}>
					<h3 className={classes.gallery__itemTitle}>{post.title}</h3>
					<p className={classes.gallery__itemDescription}>{post.description}</p>
				</Link>
				<div className={classes.gallery__itemActions}>
					<span className={classes.gallery__itemDate}>{postDate}</span>
					<div className={classes.gallery__itemButtons}>
						<button className={classes.gallery__itemLike} onClick={like}>
							<svg className={isLiked ? `${classes.likeImg} ${classes.likeActive}` : classes.likeImg}
								width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							{parseNumber(likes)}
						</button>
						<Link className={classes.gallery__itemComment} to={{pathname: `/post/${post.id}`, hash: "#comments"}}>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.commentImg}>
								<path d="M20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H8L12 22L16 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							{parseNumber(1243)}
						</Link>
						<button className={classes.gallery__itemShare}>
							<svg className={classes.shareImg}
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
							{parseNumber(reposts)}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GalleryItem;