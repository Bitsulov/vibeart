import React from 'react';
import classes from "./galleryList.module.css";
import GalleryItem from '../galleryItem/galleryItem';

const GalleryList = ({postsList, queryText, ...props}) => {
	return (
		<div>
			{postsList.length > 0 ?
				<div className={classes.gallery__list}>
					{postsList.map(post => <GalleryItem post={post} key={post.id} {...props} />)}
				</div>
			:
				<h2 className={classes.gallery__title}>По запросу {queryText} ничего не найдено</h2>
			}
		</div>
	)
}

export default GalleryList;