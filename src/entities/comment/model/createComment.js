export function createComment({id = Date.now(), srcImg, authorName = "getNameError", authorId, text = ""} = {}) {
	return {id, srcImg, authorName, authorId, text}
}
