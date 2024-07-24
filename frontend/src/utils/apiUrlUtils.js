const API_URL = process.env.REACT_APP_ROOT_API;

export function getApiRoot() {
	if (process.env.REACT_APP_PRODUCTION === "true") {
		return API_URL;
	}

	return "http://localhost:5000";
}
