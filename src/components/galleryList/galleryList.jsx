import React from 'react';
import classes from "./galleryList.module.css";
import GalleryItem from '../galleryItem/galleryItem';

const GalleryList = ({postsList, ...props}) => {
	return (
		<div className={classes.gallery__list}>
			{postsList.map(post => (
				<GalleryItem
					post={post}
					key={post.id}
					{...props}
				/>
			))}
		</div>
	)
}

export default GalleryList;