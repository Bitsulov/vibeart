import React from 'react';
import classes from "./tagList.module.css";
import { Tag } from './tag';

const TagList = ({tags}) => {
	return (
		<ul className={classes.post__tags}>
			{tags.map((tag) => (
				<Tag tag={tag.name} key={`tag${tag.id}`} />
			))}
		</ul>
	)
}

export { TagList };
