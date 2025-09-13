import classes from "./tagList.module.scss";
import { Tag } from "./tag.jsx";
import type { TagType } from "entities/tag/index.js";

interface TagListType {
    tags: TagType[];
}

const TagList = ({ tags }: TagListType) => {
    return (
        <ul className={classes.post__tags}>
            {tags.map(tag => (
                <Tag tag={tag.name} key={`tag${tag.id}`} />
            ))}
        </ul>
    );
};

export { TagList };
