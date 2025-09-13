import { useState } from "react";
import classes from "./post.module.css";
import { PostCommentsList } from "widgets/postCommentsList/index.js";
import { useHashScroll } from "shared/hooks/useHashScroll.js";
import { PostCard } from "widgets/postCard/index.js";
import { PostCommentsForm } from "features/postCommentsForm/index.js";
import { submitPostCommentsFormHandler } from "../model/submitFormHandler.js";
import { postMock } from "entities/post/index.js";
import { commentsMock } from "entities/comment/index.js";
import { useSelector } from "react-redux";
import { selectUserInfo } from "entities/user/index.js";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Post = () => {
    useHashScroll();
    const isPageLoaded = useLoadPageStatus();

    const [comments, setComments] = useState(commentsMock);
    const [textAreaValue, setTextAreaValue] = useState("");
    const userData = useSelector(selectUserInfo);

    const defaultAddedObject = {
        id: Date.now(), // !!!
        srcImg: userData.srcImg,
        authorId: userData.id,
        authorName: userData.fullName,
        text: textAreaValue.trim()
    };

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.post}>
                <PostCard
                    srcImg={postMock.srcImg}
                    srcAuthor={postMock.srcAuthor}
                    authorId={postMock.authorId}
                    name={postMock.authorName}
                    title={postMock.title}
                    description={postMock.description}
                    tags={postMock.tags}
                    date={postMock.date}
                    likes={postMock.likes}
                    reposts={postMock.reposts}
                />
                <PostCommentsList commentsList={comments} length={postMock.comments} id="comments" />
                <PostCommentsForm
                    value={textAreaValue}
                    setValue={setTextAreaValue}
                    onSubmit={e =>
                        submitPostCommentsFormHandler(
                            e,
                            comments,
                            setComments,
                            textAreaValue,
                            setTextAreaValue,
                            defaultAddedObject
                        )
                    }
                />
            </main>
        </Layout>
    );
};

export { Post };
