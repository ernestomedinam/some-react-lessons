//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import Timer from "./component/Timer";

const getRandomBgColor = () => {
	let bgColors = [
		"bg-dark",
		"bg-light",
		"bg-warning",
		"bg-primary",
		"bg-info",
		"bg-success"
	];
	return bgColors[Math.floor(Math.random() * bgColors.length)];
};

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
