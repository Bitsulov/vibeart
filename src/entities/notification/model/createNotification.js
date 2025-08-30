export function createNotification({
	id,
	authorName = "VibeArt",
	authorId = null,
	noticeType = "system",
	date = new Date().toISOString(),
	srcImg = "../src/shared/icons/logo-black.png",
	href = null,
	postName = null,
	postId = null
} = {}) {
	return {id, authorName, authorId, noticeType, date, srcImg, href, postName, postId}
}
