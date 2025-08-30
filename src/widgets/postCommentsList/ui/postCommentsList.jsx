import React from 'react';
import classes from "./postCommentsList.module.css";
import { Link } from 'react-router-dom';

const PostCommentsList = ({commentsList, length, ...props}) => {
	return (
		<section className={classes.comments} {...props}>
			<h3 className={classes.comments__title}>Комментарии ({length})</h3>
			<ul className={classes.comments__list}>
				{commentsList.map((commentItem, i) => (
					<li className={classes.comments__item} key={`comment${i}`}>
						<div className={classes.comments__inner}>
							<Link to={`/profile/${commentItem.authorId}`} className={classes.comments__author}>
								<img src={commentItem.srcImg} alt={commentItem.authorName} className={classes.authorImg} />
								<h3 className={classes.userLink}>{commentItem.authorName}</h3>
							</Link>
							<p>{commentItem.text}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export { PostCommentsList };
