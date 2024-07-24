const API_URL = process.env.ROOT_API;

export function getApiRoot() {
	if (process.env.PRODUCTION === true) {
		return API_URL;
	}

	return "http://localhost:5000";
}
