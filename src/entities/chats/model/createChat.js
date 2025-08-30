export function createChat({
	id = Date.now(),
	title = "getChatNameError",
	srcImg,
	lastMessage = "",
	date = Date.now()
} = {}) {
	return {id, title, srcImg, lastMessage, date}
}
