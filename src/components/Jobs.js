import JobsOverview from "./JobsOverview";
import React, { Component } from "react";

class Jobs extends Component {
	constructor() {
		super();
		this.state = {
			companyName: "",
			city: "",
			fromDate: "",
			toDate: "",
			role: "",
			description: "",
			allJobsInfo: [],
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitJob = (e) => {
		e.preventDefault();
		const {
			companyName,
			city,
			fromDate,
			toDate,
			role,
			description,
		} = this.state;

		this.setState({
			allJobsInfo: this.state.allJobsInfo.concat(
				companyName,
				city,
				fromDate,
				toDate,
				role,
				description
			),
			companyName: "",
			city: "",
			fromDate: "",
			toDate: "",
			role: "",
			description: "",
		});
	};

	render() {
		const {
			companyName,
			city,
			fromDate,
			toDate,
			role,
			description,
			allJobsInfo,
		} = this.state;

		return (
			<div>
				<div>
					<JobsOverview allJobs={allJobsInfo} />
				</div>
				<form onSubmit={this.onSubmitJob}>
					<div>
						<label htmlFor="companyNameInput">Company Name</label>
						<input
							onChange={this.handleChange}
							name="companyName"
							value={companyName}
							type="text"
							id="companyNameInput"
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
						<label htmlFor="roleInput">Role</label>
						<input
							onChange={this.handleChange}
							name="role"
							value={role}
							type="text"
							id="roleInput"
						/>
					</div>
					<div>
						<label htmlFor="descriptionInput">Further Description</label>
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

export default Jobs;
