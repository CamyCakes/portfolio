import React, { useState } from "react";

import configs from "../config";
import Modal from "../Modal/Modal";
import ToolTip from "./ToolTip/ToolTip";

import "./project-list.scss";

export const professionalProjectList = () => {
	return <ProjectList list={"professional"} header="Professional Work" />;
};

export const personalProjectList = () => {
	return <ProjectList list={"just_for_fun"} header="Personal Projects" />;
};

const ProjectList = (props) => {
	const [showExpandedState, setShowExpandedState] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const listData = configs.projects[props.list];

	return (
		<>
			<h2 className="projects-header">{props.header}</h2>
			<nav>
				{listData.map((item, index) => {
					return (
						<div className={`project-entry${showExpandedState === index && props.list === "professional" ? " show" : ""}`} key={index}>
							<div
								className="click-container"
								onClick={() => {
									if (props.list === "just_for_fun") setShowModal(index);
									if (showExpandedState === index) setShowExpandedState(false);
									else setShowExpandedState(index);
								}}>
								{props.list === "professional" && <img alt="" className="arrow" src={process.env.PUBLIC_URL + "/arrow.png"} />}

								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
							{props.list === "just_for_fun" && showModal === index && (
								<PersonalProjectList
									hideModal={() => {
										setShowModal(false);
									}}
									items={item.details}
								/>
							)}
							{props.list !== "just_for_fun" && <ProjectDetails key={index} items={item.details} show={showExpandedState === index} />}
						</div>
					);
				})}
			</nav>
		</>
	);
};

const PersonalProjectList = (props) => {
	return props.items.map((item, index) => {
		return (
			<Modal
				key={index}
				onClose={() => {
					props.hideModal();
				}}>
				<ProjectIframe key={index} url={item.link} />
			</Modal>
		);
	});
};

const ProjectDetails = (props) => {
	const [showModal, setShowModal] = useState(false);
	const showExpandedClass = props.show ? " show" : "";

	return (
		<div className={`project-slides-container${showExpandedClass}`}>
			<div className="project-slides">
				{props.items.map((item, index) => {
					return (
						<div key={index} className="project-slide">
							<ToolTip
								text={item.text}
								link={item.link}
								onClick={() => {
									setShowModal(index);
								}}>
								{item.image && (
									<img
										alt=""
										className={item.link ? "has-link" : ""}
										src={process.env.PUBLIC_URL + item.image}
										onClick={() => {
											setShowModal(index);
										}}
									/>
								)}
							</ToolTip>
							{props.show && showModal === index && item.link && (
								<Modal
									onClose={() => {
										setShowModal(false);
									}}>
									<ProjectIframe url={item.link} />
								</Modal>
							)}
						</div>
					);
				})}
			</div>
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
