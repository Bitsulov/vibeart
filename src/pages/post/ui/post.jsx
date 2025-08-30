import React, { useState } from 'react';
import classes from "./post.module.css";
import { PostCommentsList } from 'widgets/postCommentsList';
import { useHashScroll } from "shared/hooks/useHashScroll";
import { PostCard } from 'widgets/postCard/ui/postCard';
import { PostCommentsForm } from 'features/postCommentsForm';
import { submitPostCommentsFormHandler } from '../model/submitFormHandler';
import { postMock } from 'entities/post/const/mockConst';
import { commentsMock } from 'entities/comment/const/mockConst';
import { useSelector } from 'react-redux';
import { selectUserInfo } from 'entities/user/model/selectors';
import { Layout } from "widgets/layout";

const Post = () => {
	useHashScroll();

	const [comments, setComments] = useState(commentsMock);
	const [textAreaValue, setTextAreaValue] = useState("");
	const userData = useSelector(selectUserInfo);

	const defaultAddedObject = {
		srcImg: userData.srcImg,
		authorName: userData.fullName,
		text: textAreaValue.trim()
	}

	return (
		<Layout>
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
				<PostCommentsList
					commentsList={comments}
					length={postMock.comments}
					id="comments"
				/>
				<PostCommentsForm
					value={textAreaValue}
					setValue={setTextAreaValue}
					onSubmit={e => submitPostCommentsFormHandler(e, comments, setComments, textAreaValue, setTextAreaValue, defaultAddedObject)}
				/>
			</main>
		</Layout>
	)
}

export { Post };
