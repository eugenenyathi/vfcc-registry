import React from "react";

const Button = ({ type = "button", text, icon, btnClass, btnFn }) => {
	return (
		<button type={type} className={btnClass} onClick={btnFn}>
			{icon}
			{text}
		</button>
	);
};

export default Button;
