import Cookies from "js-cookie";

const useAuthUser = () => {
	const setAuthUser = (user) => {
		user = JSON.stringify(user);
		Cookies.set("vfcc-registry", user, {
			path: "/",
			domain: "localhost",
			expires: 30,
			sameSite: "strict",
		});
	};

	const getAuthUser = () => {
		let user = Cookies.get("vfcc-registry");
		return user ? JSON.parse(user) : false;
	};

	const deleteAuthUser = () => {
		Cookies.remove("vfcc-registry", {
			path: "/",
			domain: "localhost",
		});
	};

	return {
		setAuthUser,
		getAuthUser,
		deleteAuthUser,
	};
};

export default useAuthUser;
