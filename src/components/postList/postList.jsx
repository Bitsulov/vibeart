import React from 'react';
import classes from "./postList.module.css";
import PostItem from '../postItem/postItem';

const PostList = ({posts, ...props}) => {
	return (
		posts.length
		?
		<div className={classes.posts__list}>
			{posts.map((item) => <PostItem post={item} key={item.key} {...props}/>)}
		</div>
		:
		<div className={classes.titleWrapper}>
			<h2 className={classes.posts__title}>Здесь еще нет постов</h2>
		</div>
	)
}

export default PostList;