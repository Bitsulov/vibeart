export function checkShowDate(messageDate, prevMessageDate) {
	return (
		((prevMessageDate === null)
		|| ((messageDate.getDate() - prevMessageDate.getDate()) !== 0)
		|| (messageDate.getFullYear() !== prevMessageDate.getFullYear()))
	)
}
