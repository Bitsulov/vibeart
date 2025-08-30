export function createTag({ id = Date.now(), name } = {}) {
	return {id, name}
}
