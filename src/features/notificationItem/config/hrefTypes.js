export const hrefTypes = {
	comment: ({authorId, postId}) => `/post/${postId}`,
	answerComment: ({authorId, postId}) => `/post/${postId}`,
	like: ({authorId, postId}) => `/post/${postId}`,
	subscribe: ({authorId, postId}) => `/profile/${authorId}`,
	system: ({authorId, postId}) => null
}
