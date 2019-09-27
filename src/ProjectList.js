import React from "react";
import config from "./config";

export function professionalProjectList() {
	return <ProjectList list={"professional"} header="Professional Projects" />;
}

export function personalProjectList() {
	return <ProjectList list={"personal"} header="Personal Projects" />;
}

class ProjectList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: [],
		};
	}

	componentDidMount() {
		window.gapi.load("client", () => {
			window.gapi.client
				.init({
					apiKey: config.apiKey,
					discoveryDocs: config.discoveryDocs,
				})
				.then(() => {
					this.load();
				});
		});
	}

	load = () => {
		window.gapi.client.load("sheets", "v4", () => {
			window.gapi.client.sheets.spreadsheets.values
				.get({
					spreadsheetId: config.spreadsheetId,
					range: config.portfolioSheetNames[this.props.list] + "!" + config.sheetRange,
				})
				.then(
					response => {
						this.handleNewList(response.result.values);
					},
					response => {
						this.setState({
							listData: [{ label: "Oops there's a proplem" }],
						});
					},
				);
		});
	};

	handleNewList = newListDataArray => {
		let newList = [];
		if (!newListDataArray) {
			newList = [{ label: "No Items" }];
		} else {
			newList = newListDataArray.map(item => {
				let obj = {};
				obj.label = item[0];
				obj.url = item[1];
				obj.desc = item[2];
				return obj;
			});
		}
		this.setState({
			listData: newList,
		});
	};

	render() {
		let navList = this.state.listData;
		if (navList.length) {
			navList = navList.map((entry, index) => {
				return (
					<div className="project-entry" key={index}>
						<a href={entry.url} target="_blank" rel="noopener noreferrer">
							{entry.label}
						</a>
						<p>{entry.desc}</p>
					</div>
				);
			});
		} else {
			navList = "Fetching List...";
		}

		return (
			<div>
				<h2>{this.props.header}</h2>
				<nav>{navList}</nav>
			</div>
		);
	}
}
