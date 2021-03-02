import React, { Component } from "react";
import SkillsOverview from "./SkillsOverview";

let skillsInfoPreview = [];
class Skills extends Component {
	constructor() {
		super();
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

		skillsInfoPreview = skills;

		return (
			<div>
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
				<div>
					<SkillsOverview skills={skills} />
				</div>
			</div>
		);
	}
}

export { Skills, skillsInfoPreview };
