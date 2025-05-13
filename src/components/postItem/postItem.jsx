import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parseNumber from '../../utils/parseNumber';
import classes from "./postItem.module.css";

const PostItem = ({post, ...props}) => {
	const [isLiked, setIsLiked] = useState(post.isLiked);
	const [likes, setLikes] = useState(post.likes);
	const likeRef = useRef(null);

	const toggleLike = () => {
		if(isLiked) {
			post.likes = likes - 1;
			setLikes(likes - 1);
			setIsLiked(false);
			post.isLiked = false;
		} else {
			post.likes = likes + 1;
			setLikes(likes + 1);
			setIsLiked(true);
			post.isLiked = true;
		}
	}

	useEffect(() => {
		setLikes(post.likes);
		setIsLiked(post.isLiked);
	}, [post])

	return (
		<div className={classes.posts__post} {...props}>
			<Link to={post.link} className={classes.postImgParent}>
				<img src={post.linkImg} alt={post.title} className={classes.postImg}></img>
			</Link>
			<Link to={post.link} className={classes.postNameParent}>
				<h3 className={classes.postName}>{post.title}</h3>
			</Link>
			<div className={classes.postActions}>
				<button
					className={`${classes.postStats} ${classes.postLikes}`}
					onClick={toggleLike}
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isLiked ? `${classes.likeImg} ${classes.likeActive}` : classes.likeImg}>
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<span
						className={classes.statsNumber}
						ref={likeRef}
					>
						{parseNumber(likes)}
					</span>
				</button>
				<Link className={`${classes.postStats} ${classes.postComments}`} to={{pathname: post.link, hash: "#comments"}}>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.commentImg}>
						<path d="M20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H8L12 22L16 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2Z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<span className={classes.statsNumber}>{parseNumber(post.comments.length)}</span>
				</Link>
			</div>
		</div>
	)
}

export default PostItem;