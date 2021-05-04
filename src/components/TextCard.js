import React from "react";
import { magnifyingGlass, house, lightBulb, computer } from "../images/imageURL";

const TextCard = () => {
	return (
		<div>
			<div className="card">
				<h1>Supervisor</h1>
				<p>Monitors activity to identify project roadblocks</p>
				{magnifyingGlass}
			</div>
			<div className="card">
				<h1>Team Builder</h1>
				<p>Scans our talent network to create the optimal team for your project</p>
				{house}
			</div>
			<div className="card">
				<h1>Karma</h1>
				<p>Regularly evaluates our talent to ensure quality</p>
				{lightBulb}
			</div>
			<div className="card">
				<h1>Calculator</h1>
				<p>Uses data from past projects to provide better delivery estimates</p>
				{computer}
			</div>
		</div>
	);
};

export default TextCard;
