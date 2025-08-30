export function shareHandler(e, setCount, onClick) {
	setCount(count => ++count);
	onClick?.(e);
}
