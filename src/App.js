import React, { Component } from "react";
import { Jobs } from "./components/Jobs";
import { PersonalInfo } from "./components/PersonalInfo";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Preview } from "./components/Preview";
export class App extends Component {
	constructor() {
		super();
		this.state = {
			previewActive: false,
		};
	}

	// handleChange = (e) => {
	// 	this.setState({
	// 		task: e.target.value,
	// 	});
	// };

	onSubmitPreview = (e) => {
		e.preventDefault();

		if (this.state.previewActive) {
			this.setState({ previewActive: false });
		} else {
			this.setState({ previewActive: true });
		}
	};

	render() {
		if (!this.state.previewActive) {
			return (
				<div>
					<PersonalInfo />

					<Jobs />

					<Education />

					<Skills />

					<div>
						<button onClick={this.onSubmitPreview}>Preview</button>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<Preview />
					<div>
						<button onClick={this.onSubmitPreview}>Preview</button>
					</div>
				</div>
			);
		}
	}
}

export default App;
