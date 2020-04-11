import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

import "./pdf-viewer.scss";

export default function PDFVIewerPage(props) {
	const pdf = process.env.PUBLIC_URL + "/cameron_cozza_resume.pdf";
	const icon = process.env.PUBLIC_URL + "/download-icon.svg";
	return (
		<div className="pdf-cont">
			<PDFViewer
				document={{
					url: pdf,
				}}
				css="pdf-viewer"
				hideNavbar={true}
				scale={1.4}
			/>
			<a href={pdf} download>
				<img alt="" className="download-icon" src={icon} />
			</a>
		</div>
	);
}
