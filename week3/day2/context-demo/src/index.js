import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import { ThemeContextProvider } from "./ThemeContextProvider";

ReactDOM.render(
	<ThemeContextProvider>
		<App />
	</ThemeContextProvider>,
	document.getElementById("root")
);
