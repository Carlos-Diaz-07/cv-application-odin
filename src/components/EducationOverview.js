import React from "react";
import uniqid from "uniqid";

function EducationOverview(props) {
	const { educationInfo } = props;

	return (
		<div id={uniqid()}>
			{educationInfo.map((info) => {
				return <li id={uniqid()}>{info}</li>;
			})}
		</div>
	);
}

export default EducationOverview;
