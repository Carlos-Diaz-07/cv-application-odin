import React from "react";
import uniqid from 'uniqid';

function SkillsOverview(props) {
	const { skills } = props;

	return (
		<ul>
			{skills.map((task) => {
				return <li id={uniqid()}>{task}</li>;
			})}
		</ul>
	);
}

export default SkillsOverview;