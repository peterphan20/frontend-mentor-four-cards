import React from "react";
import { magnifyingGlass, house, lightBulb, computer } from "../images/imageURL";

const TextCard = () => {
	return (
		<div className="card-container">
			<div className="card supervisor">
				<h2 className="card-title">Supervisor</h2>
				<p className="card-description">Monitors activity to identify project roadblocks</p>
				<div className="img">{magnifyingGlass}</div>
			</div>
			<div className="card-center">
				<div className="card team-builder">
					<h2 className="card-title">Team Builder</h2>
					<p className="card-description">
						Scans our talent network to create the optimal team for your project
					</p>
					<div className="img">{house}</div>
				</div>
				<div className="card karma">
					<h2 className="card-title">Karma</h2>
					<p className="card-description">Regularly evaluates our talent to ensure quality</p>
					<div className="img">{lightBulb}</div>
				</div>
			</div>
			<div className="card calculator">
				<h2 className="card-title">Calculator</h2>
				<p className="card-description">
					Uses data from past projects to provide better delivery estimates
				</p>
				<div className="img">{computer}</div>
			</div>
		</div>
	);
};

export default TextCard;
