const axiosError = (err) => {
	// console.log(err.code);

	if (err.code === "ERR_NETWORK")
		return "We could not reach our servers. Please try again";
	else {
		const {
			response: { data, statusText },
		} = err;

		return data.error || data.err || statusText;
	}
};

export default axiosError;
