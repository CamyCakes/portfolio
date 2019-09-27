import React from "react";

import SiteHeader from './SiteHeader'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { personalProjectList, professionalProjectList } from "./ProjectList";

export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<header className={"show" + " app-header"}>
					<Link to="/">
						<img className="face" src={process.env.PUBLIC_URL + "/face.png"} />
					</Link>
					<SiteHeader />
					<nav>
						<Link to="/pro">Professional Work</Link>
						<Link to="/personal"> Personal Projects </Link>
						<a rel="noopener noreferrer" target="_blank" href={process.env.PUBLIC_URL + "/cameron_cozza_resume.pdf"}>
							Resume
						</a>
					</nav>
				</header>
				<div className={"show" + " page-content-wrap"}>
					<div className="page-content">
						<Route path="/" exact />
						<Route path="/pro" component={ professionalProjectList } />
						<Route path="/personal" component={ personalProjectList } />
					</div>
				</div>
			</Router>
		);
	}
}
