import React from 'react';
import classes from "./postCommentsList.module.css";
import PostCommentsItem from '../postCommentsItem/postCommentsItem';

const PostCommentsList = ({commentsList, ...props}) => {
	return (
		<ul className={classes.comments__list} {...props}>
			{commentsList.map((commentItem, i) => (
				<PostCommentsItem authorId={commentItem.id} src={commentItem.src} authorName={commentItem.name} commentText={commentItem.text} key={i} />
			))}
		</ul>
	)
}

export default PostCommentsList;