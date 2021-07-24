import React from "react";
import PropTypes from "prop-types";

export function TrafficLight() {
	const [color, setColor] = React.useState("green");

	const redDivClass = "red-light" + (color === "red" ? " selected" : "");
	const yellowDivClass =
		"yellow-light" + (color === "yellow" ? " selected" : "");
	const greenDivClass =
		"green-light" + (color === "green" ? " selected" : "");

	return (
		<div className="container">
			<div className="light-top"></div>
			<div className="light-box">
				<div
					className={redDivClass}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={yellowDivClass}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={greenDivClass}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
}
