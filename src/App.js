import React, { Component } from "react";
import TasksOverview from "./components/SkillsOverview";
import Jobs from "./components/Jobs";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";
export class App extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		task: "",
	// 		tasks: [],
	// 	};
	// }

	// handleChange = (e) => {
	// 	this.setState({
	// 		task: e.target.value,
	// 	});
	// };

	// onSubmitTask = (e) => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		tasks: this.state.tasks.concat(this.state.task),
	// 		task: "",
	// 	});
	// };

	render() {
		return (
			<div>
				<div>
					<PersonalInfo />
				</div>
				<div>
					<Jobs />
				</div>
				<div>
					<Education />
				</div>
				<div>
					<Skills />
				</div>
			</div>
		);
	}
}

export default App;
