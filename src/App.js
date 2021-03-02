import React, { Component } from "react";
import Jobs from "./components/Jobs";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			previewActive: false,
		};
	}

	onSubmitPreview = (e) => {
		e.preventDefault();

		if (this.state.previewActive) {
			this.setState({ previewActive: false });
		} else {
			this.setState({ previewActive: true });
		}
	};

	render() {
		const { previewActive } = this.state;
		let btn;
		if (!this.state.previewActive) {
			btn = <button onClick={this.onSubmitPreview}>Preview</button>;
		} else {
			btn = <button onClick={this.onSubmitPreview}>Edit</button>;
		}

		return (
			<div>
				<PersonalInfo previewActive={previewActive} />
				<Jobs previewActive={previewActive} />
				<Education previewActive={previewActive} />
				<Skills previewActive={previewActive} />
				{btn}
			</div>
		);
		// }
	}
}

export default App;
