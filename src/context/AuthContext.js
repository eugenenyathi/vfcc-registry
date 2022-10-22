import React, { createContext, useReducer, useEffect } from "react";
import authReducer from "./authReducer";
import useAuthUser from "../Hooks/useAuthUser";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	const { getAuthUser } = useAuthUser();

	// set auto login
	useEffect(() => {
		let user = getAuthUser();
		if (user) {
			dispatch({
				type: "LOGIN",
				payload: user,
			});
		}
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };
