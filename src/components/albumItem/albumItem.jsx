import React from 'react';
import classes from "./albumItem.module.css";

const AlbumItem = ({album, isActive=false, ...props}) => {
	return (
		<button className={isActive ? `${classes.albumsAlbum} ${classes.albumActive}` : classes.albumsAlbum} {...props}>
			{album.name}
		</button>
	)
}

export default AlbumItem;