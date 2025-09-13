import { useEffect, useState, useRef } from "react";
import classes from "./galleryList.module.scss";
import { GalleryItem } from "features/galleryItem/index.js";
import { Link } from "react-router-dom";
import type { PostType } from "entities/post/index.js";

interface GalleryListPropsType {
    postsList: PostType[];
    queryText: string | null;
}

const GalleryList = ({ postsList, queryText, ...props }: GalleryListPropsType) => {
    const [filteredList, setFilteredList] = useState<PostType[]>([]);
    const [showLoader, setShowLoader] = useState(true);
    const loaderRef = useRef(null);

    // window.addEventListener("scroll", e => {
    // 	   if(loaderRefcurrent?.offsetTop - window.scrollY - window.innerHeight < 0) {
    // 	     	loadPosts();
    // 	   }
    // })

    useEffect(() => {
        if (queryText !== null) {
            setFilteredList(
                postsList.filter(post => {
                    if (post.title.toLowerCase().includes(queryText.toLowerCase())) {
                        return post;
                    }
                })
            );
        } else {
            setFilteredList(postsList);
        }
    }, [postsList, queryText]);

    return (
        <>
            {filteredList.length > 0 ? (
                <div className={classes.gallery__list} {...props}>
                    {filteredList.map(post => (
                        <GalleryItem
                            id={post.id}
                            // isLiked={post.isLiked}
                            likes={post.likes}
                            comments={post.comments}
                            reposts={post.reposts}
                            srcImg={post.srcImg}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            authorId={post.authorId}
                            authorName={post.authorName}
                            srcAuthor={post.srcAuthor}
                            key={post.id}
                        />
                    ))}
                </div>
            ) : (
                <h2 className={classes.gallery__title}>
                    По запросу "{queryText}" ничего не найдено.{" "}
                    <Link to="/gallery" className={classes.gallery__link}>
                        Вернуться
                    </Link>
                </h2>
            )}
            {/* <Loader ref={loaderRef} show={showLoader ? true : false}/> */}
        </>
    );
};

export { GalleryList };
