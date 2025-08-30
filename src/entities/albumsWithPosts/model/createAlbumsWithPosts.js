export function createAlbumsWithPosts({id = Date.now(), albumId, postId} = {}) {
	return {id, albumId, postId}
}
