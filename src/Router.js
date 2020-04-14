import React, { useState } from "react";

import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import PDFViewer from "./ProjectList/PDFViewer/PDFViewer";

import { ProjectLists } from "./ProjectList/ProjectList";
import { Blob } from "./Blob/Blob";

export const Routes = () => {
	const [showContent, setShowContent] = useState(false);
	const showContentClass = showContent ? " show" : "";
	return (
		<Router>
			<header className={`app-header${showContentClass}`}>
				<Blob className="blob-header">
					<img
						onClick={() => {
							setShowContent(false);
						}}
						alt=""
						className="name"
						src={process.env.PUBLIC_URL + "/name.svg"}
					/>
				</Blob>
				<nav
					onClick={() => {
						setShowContent(true);
					}}>
					<Link to="/portfolio/projects">My Work</Link>
					<Link to="/portfolio/resume">resume</Link>
				</nav>
			</header>
			<div className={`page-content-wrap${showContentClass}`}>
				<div className="page-content project-container">
					<Route path="/portfolio/" exact />
					<Route path="/portfolio/projects" component={ProjectLists} />
					<Route path="/portfolio/resume" component={PDFViewer} />
				</div>
			</div>
		</Router>
	);
};
