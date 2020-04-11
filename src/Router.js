import React, { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { personalProjectList, professionalProjectList } from "./ProjectList/ProjectList";

import PDFViewer from "./ProjectList/PDFViewer/PDFViewer";

export const Routes = () => {
	const [showContent, setShowContent] = useState(false);
	const showContentClass = showContent ? " show" : "";

	return (
		<Router>
			<header className={`app-header${showContentClass}`}>
				<Link
					to="/"
					onClick={() => {
						setShowContent(false);
					}}>
					<img alt="" className="face" src={process.env.PUBLIC_URL + "/face.png"} />
				</Link>
				<img alt="" className="name" src={process.env.PUBLIC_URL + "/name.svg"} />
				<div>○ ○ ○</div>
				<Navigation
					onClick={() => {
						setShowContent(true);
					}}
				/>
			</header>
			<div className={`page-content-wrap${showContentClass}`}>
				<div className="page-content project-container">
					<Route path="/" exact />
					<Route path="/pro" component={professionalProjectList} />
					<Route path="/personal" component={personalProjectList} />
					<Route path="/resume" component={PDFViewer} />
				</div>
			</div>
		</Router>
	);
};

const Navigation = (props) => {
	return (
		<nav
			onClick={() => {
				props.onClick();
			}}>
			<Link to="/pro">Professional work</Link>
			<Link to="/personal">Personal Projects</Link>
			<Link to="/resume">resume</Link>
		</nav>
	);
};
