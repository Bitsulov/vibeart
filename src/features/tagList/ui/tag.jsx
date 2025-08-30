import React from 'react';
import classes from "./tagList.module.css";
import { tagClickHandler } from '../model/tagClickHandler';
import { useDispatch } from 'react-redux';

const Tag = ({tag, ...props}) => {
	const dispatch = useDispatch();

	return (
		<li
			className={classes.post__tag}
			onClick={e => tagClickHandler(e, dispatch, tag)}
			{...props}
		>
			#{tag}
		</li>
	)
}

export { Tag };
