import React from "react";
import Alert from "@material-ui/lab/Alert";

export const Error = ({ error }) => (
	<Alert severity="error">This is an error alert — {error}</Alert>
);
