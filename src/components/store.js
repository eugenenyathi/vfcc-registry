{
	error || asyncError ? (
		<Alert msg={error || asyncError} alertType="alert-danger" />
	) : (
		""
	);
}

useEffect(() => {
	if (asyncError) {
		showError(true, asyncError, "danger");
	}
}, [asyncError]);
