interface AlbumsWithPostsType {
    id: number;
    albumId: number;
    postId: number;
}

export function createAlbumsWithPosts({ id = Date.now(), albumId, postId }: AlbumsWithPostsType) {
    return { id, albumId, postId };
}
