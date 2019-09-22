import React from "react";

function ProjectList(props) {
	let entries = props.list.map((entry, index) => {
		return (
			<div className="project-entry" key={index}>
				<a href={entry.url} target="_blank" rel="noopener noreferrer">
					{entry.label}
				</a>
				<p>{entry.desc}</p>
			</div>
		);
	});
	return (
		<div>
			<h1>{props.header}</h1>
			<nav>{entries}</nav>
		</div>
	);
}

export default ProjectList;
