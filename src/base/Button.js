const Button = ({ text, btnClass, btnFn, icon }) => {
	return (
		<button className={btnClass} onClick={btnFn}>
			{icon}
			{text}
		</button>
	);
};

export default Button;
