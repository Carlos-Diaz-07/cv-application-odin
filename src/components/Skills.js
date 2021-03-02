import React, { Component } from "react";
import SkillsOverview from "./SkillsOverview";

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skill: "",
			skills: [],
		};
	}

	handleChange = (e) => {
		this.setState({
			skill: e.target.value,
		});
	};

	onSubmitSkill = (e) => {
		e.preventDefault();
		this.setState({
			skills: this.state.skills.concat(this.state.skill),
			skill: "",
		});
	};
	render() {
		const { skills, skill } = this.state;

		let form;
		if (!this.props.previewActive) {
			form = (
				<form onSubmit={this.onSubmitSkill}>
					<label htmlFor="skillInput">Enter Skill</label>
					<input
						onChange={this.handleChange}
						value={skill}
						type="text"
						id="skillInput"
					/>
					<button type="submit">+Add Skill</button>
				</form>
			);
		}

		return (
			<div>
				<SkillsOverview skills={skills} />
				{form}
			</div>
		);
	}
}

export default Skills;
