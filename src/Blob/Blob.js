import React from "react";
import "./blob.scss";
export const Blob = (props) => {
	return (
		<>
			<div className={props.className}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<span className="blob-content">{props.children}</span>
				<svg className="hide" xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="blob">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
							<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
							<feComposite in="SourceGraphic" in2="blob" operator="atop" />
						</filter>
					</defs>
				</svg>
			</div>
		</>
	);
};
