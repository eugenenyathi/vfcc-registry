import React, { useState, useEffect } from "react";
import useValidator from "../Hooks/useValidator";
import useLogin from "../Hooks/useLogin";
import Alert from "../components/Alert";
// import vfcclogo from "../assets/vfcc-logo.jpg";

const Login = () => {
	const [username, setUsername] = useState("Lufu");
	const [password, setPassword] = useState("password123");
	const [rememberMe, setRememberMe] = useState(false);

	const [error, setError] = useState({
		show: false,
		msg: "",
		type: "",
	});

	const { validateUsername, validatePassword } = useValidator();
	const { asyncError, isLoading, login } = useLogin();

	useEffect(() => {
		if (asyncError) {
			showError(true, asyncError, "danger");
		}
	}, [asyncError]);

	const handleLogin = async (ev) => {
		ev.preventDefault();

		if (!validateUsername(username)) {
			showError(true, "Username field is empty", "danger");
		} else if (!validatePassword(password)) {
			showError(true, "Your password is incorrect", "danger");
		} else {
			//let's proceed
			// console.log("click:");
			await login(rememberMe, username, password);
		}
	};

	const showError = (show = false, msg, type) => {
		setError({
			show,
			msg,
			type,
		});
	};

	return (
		<div className="login-container">
			<div className="login-content">
				{/*				<div className="vfcc-logo-wrapper">
					<img src={vfcclogo} alt="vfcc-logo" className="vfcc-logo" />
				</div>*/}

				<div className={`login-header ${error.show && "show-alert"}`}>
					<h2>Victoria Falls City</h2>
				</div>
				{error.show && <Alert {...error} removeAlert={showError} />}
				<form className="login-form" onSubmit={handleLogin}>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							className="login-input"
							value={username}
							onChange={(ev) => setUsername(ev.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Password</label>
						<input
							type="text"
							id="email"
							className="login-input"
							value={password}
							onChange={(ev) => setPassword(ev.target.value)}
						/>
					</div>
					<div className="login-links">
						<p className="remember-me">
							<input
								type="checkbox"
								id="remember-me"
								className="login-checkbox"
								onChange={() => setRememberMe(!rememberMe)}
							/>{" "}
							<label htmlFor="remember-me">
								Remember for 30 days
							</label>
						</p>
						<p className="forgot-password">Forgot password</p>
					</div>
					<button className="login-btn" disabled={isLoading}>
						Sign in
					</button>
					<p className="look-up-request">
						Checking application status? <span>Click here</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
