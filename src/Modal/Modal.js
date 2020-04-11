import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

export default function Modal(props) {
	const modalNode = document.getElementById("modal-container");

	useEffect(() => {
		document.addEventListener("keyup", exitModal);
		return () => document.removeEventListener("keyup", exitModal);
	});

	const exitModal = (e) => {
		if (e.key === "Escape") props.onClose();
		e.preventDefault();
	};

	if (!props.children) return null;
	return ReactDOM.createPortal(
		<div
			className="modal-container"
			onClick={() => {
				props.onClose();
			}}>
			<span
				className="close-button"
				onClick={() => {
					props.onClose();
				}}>
				<span className="close-button-text" dangerouslySetInnerHTML={{ __html: "&times;" }}></span>
			</span>
			{props.children}
		</div>,
		modalNode,
	);
}
