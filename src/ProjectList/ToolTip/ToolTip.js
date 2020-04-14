import React, { useState } from "react";
import "./tool-tip.scss";

export default function ToolTip(props) {
	const [showToolTip, setShowToolTip] = useState(false);

	const openLink = props.link && (
		<div>
			<div
				className="tool-tip-link"
				onClick={() => {
					props.onClick();
				}}
				dangerouslySetInnerHTML={{ __html: "Check it out&rarr;" }}></div>
		</div>
	);

	const tags = props.tags && (
		<div className="tags">
			{props.tags.map((tag, index) => {
				return (
					<span style={{ background: tag.color }} key={index}>
						{tag.tag}
					</span>
				);
			})}
		</div>
	);

	return (
		<div
			className="tool-tip-container"
			onMouseEnter={() => {
				setShowToolTip(true);
			}}
			onMouseLeave={() => {
				setShowToolTip(false);
			}}>
			<div className={`tool-tip ${showToolTip ? "show" : ""}`}>
				{tags}
				<div className="header">{props.header}</div>
				<div className="text"> {props.text} </div>
				{openLink}
			</div>
			{props.children}
		</div>
	);
}
