import React from "react";
import uniqid from "uniqid";
import { personalInfoPreview } from "./PersonalInfo";
import { jobsInfoPreview } from "./Jobs";
import { educationInfoPreview } from "./Education";
import { skillsInfoPreview } from "./Skills";

function Preview() {
	return (
		<div>
			<div id={uniqid()}>
				{personalInfoPreview.map((info) => {
					return <li id={uniqid()}>{info}</li>;
				})}
			</div>

			<div id={uniqid()}>
				{jobsInfoPreview.map((job) => {
					return <li id={uniqid()}>{job}</li>;
				})}
			</div>

			<div id={uniqid()}>
				{educationInfoPreview.map((info) => {
					return <li id={uniqid()}>{info}</li>;
				})}
			</div>

			<ul>
				{skillsInfoPreview.map((task) => {
					return <li id={uniqid()}>{task}</li>;
				})}
			</ul>
		</div>
	);
}
export { Preview };
