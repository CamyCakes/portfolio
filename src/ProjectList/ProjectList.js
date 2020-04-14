import React, { useState } from "react";

import configs from "../config";
import Modal from "../Modal/Modal";
import ToolTip from "./ToolTip/ToolTip";

import "./project-list.scss";

export const ProjectLists = () => {
	return (
		<>
			<ProjectList list="professional" header="Professional Work" />
			<ProjectList list="personal" header="Personal Projects" subheader={"Fun and learning"} />
		</>
	);
};

const ProjectList = (props) => {
	const listData = configs.projects[props.list];

	return (
		<>
			<h2 className="projects-header">{props.header}</h2>
			{props.subheader ? <h3 className="projects-sub-header">{props.subheader}</h3> : null}
			<nav>
				{listData.map((item, index) => {
					return <Project list={props.list} item={item} key={index} index={index} />;
				})}
			</nav>
		</>
	);
};

const Project = (props) => {
	const [showModal, setShowModal] = useState(false);

	const index = props.index;
	const item = props.item;
	const imageSrc = process.env.PUBLIC_URL + props.item.image;

	return (
		<div className="project-section">
			<ToolTip
				text={item.description}
				header={item.title}
				tags={item.tags}
				link={item.link || item.externalLink}
				onClick={() => {
					if (item.link) setShowModal(index);
					else if (item.externalLink) window.open(item.externalLink, "_blank");
				}}>
				<img
					onClick={() => {
						if (item.link) setShowModal(index);
					}}
					className="project-image"
					src={imageSrc}
				/>

				{showModal === index && item.link && (
					<Modal
						onClose={() => {
							setShowModal(false);
						}}>
						<ProjectIframe url={item.link} />
					</Modal>
				)}
			</ToolTip>
		</div>
	);
};

const ProjectIframe = (props) => {
	if (!props.url) return null;
	const iframeStyles = {
		padding: "10px",
		height: "75vh",
		width: "75vw",
		position: "relative",
		zIndex: 3,
	};
	const containerStyles = { background: "white", position: "relative", zIndex: 1, borderRadius: "5px" };

	return (
		<div style={containerStyles}>
			<iframe title="iframe" src={props.url} style={iframeStyles} />
		</div>
	);
};
