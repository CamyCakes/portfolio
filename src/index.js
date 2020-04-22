import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { ProjectLists } from "./ProjectList/ProjectList";
import { Blob } from "./Blob/Blob";

import "../node_modules/html5-boilerplate/dist/css/main.css";
import "../node_modules/html5-boilerplate/dist/css/normalize.css";
import "./index.scss";

function App() {
	const [showContent, setShowContent] = useState(false);
	const showLargeBlobClass = showContent ? " large" : "";
	const showNavClass = !showContent ? "" : " hide";

	return (
		<div className="App">
			<div className="app-header">
				<Blob className={`blob${showLargeBlobClass}`}>
					<img
						onClick={() => {
							setShowContent(false);
						}}
						alt=""
						className="name"
						src={process.env.PUBLIC_URL + "/name.svg"}
					/>
				</Blob>
				<nav className={`main-nav${showNavClass}`}>
					<a
						onClick={() => {
							setShowContent(true);
						}}>
						My Work
					</a>

					<a href={process.env.PUBLIC_URL + "/cameron_cozza_resume.pdf"} download>
						resume
					</a>
				</nav>
			</div>

			<ProjectLists showContent={showContent} hideMe={() => setShowContent(false)} />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
