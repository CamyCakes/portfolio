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
				{props.text}
				{openLink}
			</div>
			{props.children}
		</div>
	);
}
