import { useEffect, useState } from "react";
import classes from "./postCard.module.scss";
import { postLikeHandler } from "../model/postLikeHandler.js";
import { postShareHandler } from "../model/postShareHandler.js";
import { TagList } from "features/tagList/index.js";
import { LikeButton } from "features/likeButton/index.js";
import { ShareButton } from "features/shareButton/index.js";
import { checkDateYear } from "shared/lib/dates.js";
import { Link } from "react-router-dom";
import type { TagType } from "entities/tag/index.js";

interface PostCardPropsType {
    srcImg: string;
    srcAuthor: string;
    authorId: number;
    name: string;
    title: string;
    description: string;
    date: string;
    likes: number;
    reposts: number;
    tags: TagType[];
}

const PostCard = ({
    srcImg,
    srcAuthor,
    authorId,
    name,
    title,
    description,
    tags,
    date,
    likes,
    reposts
}: PostCardPropsType) => {
    const [resultDate, setResultDate] = useState("");

    useEffect(() => {
        setResultDate(checkDateYear(date));
    }, [date]);

    return (
        <section className={classes.post__card}>
            <img src={srcImg} alt={title} className={classes.post__image}></img>
            <div className={classes.post__info}>
                <div className={classes.post__authorInfo}>
                    <img src={srcAuthor} alt={name} className={classes.post__avatar}></img>
                    <p className={classes.post__author}>
                        от{" "}
                        <Link to={`/profile/${authorId}`} className={classes.post__authorLink}>
                            {name}
                        </Link>
                    </p>
                </div>
                <h2 className={classes.post__title}>{title}</h2>
                <p className={classes.post__description}>{description}</p>
                <TagList tags={tags} />
                <div className={classes.post__meta}>
                    <span className={classes.post__date}>{resultDate}</span>
                    <div className={classes.post__buttons}>
                        <LikeButton count={likes} onClick={postLikeHandler} />
                        <ShareButton count={reposts} onClick={postShareHandler} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { PostCard };
