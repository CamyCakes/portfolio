import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectList from "./ProjectList";

import { professionalProjects, personalProjects } from "./projectsData";

export default function Routes() {
	let [isHome, setIsHome] = useState(true);
	return (
		<Router>
			<header className={(isHome ? "" : "show") + " app-header"}>
				<Link
					to="/"
					onClick={() => {
						setIsHome(true);
					}}>
					<img src={process.env.PUBLIC_URL + "/face.png"} />
				</Link>
				<nav>
					<Link
						to="/pro"
						onClick={() => {
							setIsHome(false);
						}}>
						Professional Work
					</Link>
					<Link
						to="/projects"
						onClick={() => {
							setIsHome(false);
						}}>
						Personal Projects
					</Link>
					<a rel="noopener noreferrer" target="_blank" href={process.env.PUBLIC_URL + "/2019-09-resume.pdf"}>
						Resume
					</a>
				</nav>
			</header>
			<div className={(isHome ? "" : "show") + " page-content-wrap"}>
				<div className="page-content">
					<Route path="/" exact component={this} />
					<Route path="/projects" component={Projects} />
					<Route path="/pro" component={ProfessionalProjects} />
				</div>
			</div>
		</Router>
	);
}

function Projects() {
	console.log(personalProjects);
	return <ProjectList list={personalProjects} header="Personal Projects" />;
}

function ProfessionalProjects() {
	return <ProjectList list={professionalProjects} header="Professional Projects" />;
}
