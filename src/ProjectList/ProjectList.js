import React, { useState, useEffect } from "react";

import { Transition } from "react-transition-group";

import configs from "../config";
import Modal from "../Modal/Modal";
import ToolTip from "../ToolTip/ToolTip";

import "./project-list.scss";

export const ProjectLists = (props) => {
	const [inProp, setInProp] = useState(false);
	const showContent = props.showContent;

	useEffect(() => {
		if (showContent) setInProp(true);
		else setInProp(false);
	});
	const duration = 1000;

	const defaultStyle = {
		transition: `opacity ${duration}ms cubic-bezier(1, 0, 0, 1)`,
		pointerEvents: "none",
		opacity: 0,
	};

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1, pointerEvents: "all" },
		exiting: { opacity: 0 },
		exited: { opacity: 0, pointerEvents: "none" },
	};

	return (
		<Transition in={inProp} out={inProp} timeout={duration}>
			{(state) => (
				<div
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}>
					<div className="projects-container">
						<div className="back-arrow-cont">
							<div onClick={() => props.hideMe()} className="back-arrow">
								&larr;
							</div>
						</div>
						<ProjectList list="professional" header="Professional Work" />
						<ProjectList list="personal" header="Personal Projects" subheader={"Fun and learning"} />
					</div>
				</div>
			)}
		</Transition>
	);
};

const ProjectList = (props) => {
	const listData = configs.projects[props.list];

	return (
		<>
			<div className="project-sections">
				<h2 className="projects-header">{props.header}</h2>
				{props.subheader ? <h3 className="projects-sub-header">{props.subheader}</h3> : null}
				{listData.map((item, index) => {
					return <Project list={props.list} item={item} key={index} index={index} />;
				})}
			</div>
		</>
	);
};

const Project = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [closeToolTip, setCloseToolTip] = useState(false);

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
				closeToolTip={closeToolTip}
				onClick={() => {
					if (item.link) setShowModal(index);
					else if (item.externalLink) window.open(item.externalLink, "_blank");
					setCloseToolTip(!closeToolTip);
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
