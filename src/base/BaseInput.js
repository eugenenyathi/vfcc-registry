const BaseInput = ({ type = "text", label, tagClass, placeholder }) => {
	if (label) {
		return (
			<>
				{" "}
				<label htmlFor="">{label}</label>
				<input
					type={type}
					className={tagClass}
					placeholder={placeholder}
				/>{" "}
			</>
		);
	}

	return <input type={type} className={tagClass} placeholder={placeholder} />;
};

export default BaseInput;
