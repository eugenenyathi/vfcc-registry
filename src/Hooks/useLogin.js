import { useState } from "react";
import axios from "axios";
import axiosError from "../Helpers/axios-error";
import useAuthContext from "./useAuthContext";
import useAuthUser from "./useAuthUser";

const useLogin = () => {
	const [asyncError, setAsyncError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { dispatch } = useAuthContext();
	const { setAuthUser } = useAuthUser();

	const login = async (rememberMe, username, password) => {
		try {
			setIsLoading(true);

			const { status, data: user } = await axios.get("/users/4");

			if (status === 200) {
				console.log(user);

				//update global state
				dispatch({
					type: "LOGIN",
					payload: user,
				});

				//update cookies
				if (rememberMe) setAuthUser(user);

				setIsLoading(false);
			}
		} catch (err) {
			setAsyncError(axiosError(err));
			setIsLoading(false);
		}
	};

	return {
		asyncError,
		isLoading,
		login,
	};
};

export default useLogin;
