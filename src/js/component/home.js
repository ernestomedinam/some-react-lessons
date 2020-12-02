import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./Jumbotron";
import { NavBar } from "./NavBar";
import Timer from "./Timer";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: "bg-dark"
		};
		this.getRandomBgColor = this.getRandomBgColor.bind(this);
	}
	getRandomBgColor() {
		let bgColors = [
			"bg-dark",
			"bg-light",
			"bg-warning",
			"bg-primary",
			"bg-info",
			"bg-success"
		];
		this.setState({
			bgColor: bgColors[Math.floor(Math.random() * bgColors.length)]
		});
	}
	render() {
		return (
			<>
				<Timer
					bgColor={this.state.bgColor}
					randomizeBg={this.getRandomBgColor}
				/>
			</>
		);
	}
}
