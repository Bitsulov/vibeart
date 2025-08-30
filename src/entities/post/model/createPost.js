export function createPost({
	id = Date.now(),
	title = "",
	description = "",
	img,
	authorName = "getNameError",
	authorId,
	likes = 0,
	comments = 0,
	reposts = 0,
	date = new Date().toISOString(),
	srcImg,
	srcAuthor,
	tags = {}
} = {}) {
	return {id, title, description, img, authorName, authorId, likes, comments, reposts, date, srcImg, srcAuthor, tags}
}
