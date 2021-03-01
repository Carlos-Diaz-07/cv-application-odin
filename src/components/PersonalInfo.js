import React, { Component } from "react";
import PersonalInfoOverview from "./PersonalInfoOverview";
class PersonalInfo extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			currentRole: "",
			address: "",
			phoneNumber: "",
			emailAddress: "",
			allPersonalInfo: [],
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitPersonalInfo = (e) => {
		e.preventDefault();
		const {
			firstName,
			lastName,
			currentRole,
			address,
			phoneNumber,
			emailAddress,
		} = this.state;

		this.setState({
			allPersonalInfo: this.state.allPersonalInfo.concat(
				firstName,
				lastName,
				currentRole,
				address,
				phoneNumber,
				emailAddress
			),
			firstName: "",
			lastName: "",
			currentRole: "",
			address: "",
			phoneNumber: "",
			emailAddress: "",
		});
	};

	render() {
		const {
			firstName,
			lastName,
			currentRole,
			address,
			phoneNumber,
			emailAddress,
			allPersonalInfo,
		} = this.state;

		return (
			<div>
				<div>
					<PersonalInfoOverview personalInfo={allPersonalInfo} />
				</div>
				<form onSubmit={this.onSubmitPersonalInfo}>
					<div>
						<label htmlFor="firstNameInput">First Name</label>
						<input
							onChange={this.handleChange}
							name="firstName"
							value={firstName}
							type="text"
							id="firstNameInput"
						/>
					</div>
					<div>
						<label htmlFor="lastNameInput">Last Name</label>
						<input
							onChange={this.handleChange}
							name="lastName"
							value={lastName}
							type="text"
							id="lastNameInput"
						/>
					</div>
					<div>
						<label htmlFor="currentRoleInput">Current Role</label>
						<input
							onChange={this.handleChange}
							name="currentRole"
							value={currentRole}
							type="text"
							id="currentRoleInput"
						/>
					</div>
					<div>
						<label htmlFor="addressInput">Address</label>
						<input
							onChange={this.handleChange}
							name="address"
							value={address}
							type="text"
							id="addressInput"
						/>
					</div>
					<div>
						<label htmlFor="phoneNumberInput">Phone Nember</label>
						<input
							onChange={this.handleChange}
							name="phoneNumber"
							value={phoneNumber}
							type="number"
							id="phoneNumberInput"
						/>
					</div>
					<div>
						<label htmlFor="emailAddressInput">email Address</label>
						<input
							onChange={this.handleChange}
							name="emailAddress"
							value={emailAddress}
							type="email"
							id="emailAddressInput"
						/>
					</div>
					<button type="submit">+Add</button>
				</form>
			</div>
		);
	}
}

export default PersonalInfo;
