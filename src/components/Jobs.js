import React from "react";
import uniqid from 'uniqid';

function Overview(props) {
	const { tasks } = props;

	return (
		<ul>
			{tasks.map((task) => {
				return <li id={uniqid()}>{task}</li>;
			})}
		</ul>
	);
}

export default Overview;