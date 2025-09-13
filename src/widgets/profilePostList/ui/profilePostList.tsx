import type { PostType } from "entities/post/index.js";
import classes from "./profilePostList.module.css";
import { ProfilePostItem } from "features/profilePostItem/index.js";

interface ProfilePostListPropsType {
    posts: PostType[];
}

const ProfilePostList = ({ posts, ...props }: ProfilePostListPropsType) => {
    return posts.length ? (
        <div className={classes.posts__list} {...props}>
            {posts.map(item => (
                <ProfilePostItem
                    id={item.id}
                    srcImg={item.srcImg}
                    title={item.title}
                    description={item.description}
                    likes={item.likes}
                    comments={item.comments}
                    reposts={item.reposts}
                    date={item.date}
                    tags={item.tags}
                    key={item.id}
                />
            ))}
        </div>
    ) : (
        <div className={classes.titleWrapper}>
            <h2 className={classes.posts__title}>Здесь еще нет постов</h2>
        </div>
    );
};

export { ProfilePostList };
