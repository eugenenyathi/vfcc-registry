import isEmpty from "../Helpers/isEmpty.js";

const useValidator = () => {
	const validateUsername = (username) => {
		if (isEmpty(username)) {
			return false;
		}

		return true;
	};

	const validatePassword = (password) => {
		if (isEmpty(password) || password.length < 8) {
			return false;
		}

		return true;
	};

	return {
		validateUsername,
		validatePassword,
	};
};

export default useValidator;
