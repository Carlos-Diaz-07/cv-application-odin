import React from "react";
import uniqid from "uniqid";

function PersonalInfoOverview(props) {
	const { personalInfo } = props;

	return (
		<div id={uniqid()}>
			{personalInfo.map((info) => {
				return <li id={uniqid()}>{info}</li>;
			})}
		</div>
	);
}

export default PersonalInfoOverview;
