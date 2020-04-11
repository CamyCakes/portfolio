import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./Router";

import "../node_modules/html5-boilerplate/dist/css/main.css";
import "../node_modules/html5-boilerplate/dist/css/normalize.css";
import "./index.scss";

function App() {
	return (
		<div className="App">
			<Routes />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
