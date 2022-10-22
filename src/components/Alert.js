import React, { useEffect } from "react";

const Alert = ({ show, msg, type, removeAlert }) => {
	useEffect(() => {
		const clear = setTimeout(() => {
			removeAlert();
		}, 3000);

		return () => clearTimeout(clear);
	});
	return <div className={`alert alert-${type}`}>{msg}</div>;
};

export default Alert;
