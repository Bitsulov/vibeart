export function createAlbum({id = Date.now(), name = "Все работы", srcImg = null, userId, isFirst = true} = {}) {
	return {id, name, srcImg, userId, isFirst}
}
