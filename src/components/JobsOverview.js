import React from "react";
import uniqid from "uniqid";

function JobsOverview(props) {
	const { allJobs } = props;

	return (
		<div id={uniqid()}>
			{allJobs.map((job) => {
				return <li id={uniqid()}>{job}</li>;
			})}
		</div>
	);
}

export default JobsOverview;
