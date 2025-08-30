import React from 'react';
import classes from "./albumItem.module.css";
import { albumClickHandler } from '../model/albumClickHandler';

const AlbumItem = ({album, id, name, isActive = false, setSelectedAlbum, ...props}) => {
	return (
		<button
			className={isActive ? `${classes.albumsAlbum} ${classes.albumActive}` : classes.albumsAlbum}
			onClick={e => albumClickHandler(e, setSelectedAlbum, id)}
			{...props}
		>
			{name}
		</button>
	)
}

export { AlbumItem };
