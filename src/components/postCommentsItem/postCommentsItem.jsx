import React from 'react';
import classes from "./postCommentsItem.module.css";
import { Link } from 'react-router-dom';

const PostCommentsItem = ({authorId, src, authorName, commentText, ...props}) => {
	return (
		<li className={classes.comments__item} {...props}>
			<div className={classes.comments__inner}>
				<Link to={`/profile/${authorId}`} className={classes.comments__author}>
					<img src={src} alt="author avatar" className={classes.authorImg} />
					<h3 className={classes.userLink}>{authorName}</h3>
				</Link>
				<p>{commentText}</p>
			</div>
		</li>
	)
}

export default PostCommentsItem;