import React, { Component } from "react";
import EducationOverview from './EducationOverview'

class Education extends Component {
	constructor() {
		super();
		this.state = {
			schoolName: "",
			city: "",
			fromDate: "",
			toDate: "",
			course: "",
			description: "",
			allEducationInfo: [],
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitJob = (e) => {
		e.preventDefault();
		const {
			schoolName,
			city,
			fromDate,
			toDate,
			course,
			description,
		} = this.state;

		this.setState({
			allEducationInfo: this.state.allEducationInfo.concat(
				schoolName,
				city,
				fromDate,
				toDate,
				course,
				description
			),
			schoolName: "",
			city: "",
			fromDate: "",
			toDate: "",
			course: "",
			description: "",
		});
	};

	render() {
		const {
			schoolName,
			city,
			fromDate,
			toDate,
			course,
			description,
			allEducationInfo,
		} = this.state;

		return (
			<div>
				<div>
					<EducationOverview educationInfo={allEducationInfo} />
				</div>
				<form onSubmit={this.onSubmitJob}>
					<div>
						<label htmlFor="schoolNameInput">School or University Name</label>
						<input
							onChange={this.handleChange}
							name="schoolName"
							value={schoolName}
							type="text"
							id="schoolNameInput"
						/>
					</div>
					<div>
						<label htmlFor="cityInput">City</label>
						<input
							onChange={this.handleChange}
							name="city"
							value={city}
							type="text"
							id="cityInput"
						/>
					</div>
					<div>
						<label htmlFor="fromDateInput">From</label>
						<input
							onChange={this.handleChange}
							name="fromDate"
							value={fromDate}
							type="date"
							id="fromDateInput"
						/>
					</div>
					<div>
						<label htmlFor="toDateInput">To</label>
						<input
							onChange={this.handleChange}
							name="toDate"
							value={toDate}
							type="date"
							id="toDateInput"
						/>
					</div>
					<div>
						<label htmlFor="courseInput">Degree or Diploma</label>
						<input
							onChange={this.handleChange}
							name="course"
							value={course}
							type="text"
							id="courseInput"
						/>
					</div>
					<div>
						<label htmlFor="descriptionInput">Subject and Further Description</label>
						<textarea
							onChange={this.handleChange}
							name="description"
							value={description}
							type="text"
							id="descriptionInput"
						>
							Anything to Add?
						</textarea>
					</div>
					<button type="submit">+Add</button>
				</form>
			</div>
		);
	}
}

export default Education;
