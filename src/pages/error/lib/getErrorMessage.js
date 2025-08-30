import { errorsConfig } from "../config/errorsConfig"

function getErrorMessage(status) {
	return errorsConfig[status] || errorsConfig[Math.floor(status / 100) * 100];
}

export {getErrorMessage}