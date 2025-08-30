export function createUser({
	id = Date.now(),
	userName,
	firstName,
	secondName,
	description = "",
	subcribers = 0,
	subcribes = 0,
	works = 0,
	srcImg,
	status = "offline"
}) {
	return {id, userName, firstName, secondName, description, subcribers, subcribes, works, srcImg, status}
}
