export function likeHandler(e, setCount, isliked, setIsLiked, onClick) {
	if(isliked) {
		setCount(count => --count);
		setIsLiked(false);
	} else {
		setCount(count => ++count);
		setIsLiked(true);
	}
	onClick?.(e);
}
