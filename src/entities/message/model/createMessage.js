export function createMessage({id = Date.now(), text = "messageError", type, time = new Date().toISOString(), status = "unread"}) {
	return {id, text, type, time, status};
}
