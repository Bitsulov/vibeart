export function createSubscription(id = Date.now(), subscribingUserId, subscribedUserId, value) {
	return {id, subscribingUserId, subscribedUserId, value}
}
