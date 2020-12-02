import React from "react";
import PropTypes from "prop-types";

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			laps: [],
			intervalId: null
		};
		this.startCounter = this.startCounter.bind(this);
		this.handleLap = this.handleLap.bind(this);
		this.handleStop = this.handleStop.bind(this);
	}
	componentDidMount() {
		this.startCounter();
	}
	startCounter() {
		if (this.state.intervalId == null) {
			let intervalId = setInterval(() => {
				this.setState({
					counter: this.state.counter + 1
				});
			}, 1000);
			this.setState({
				intervalId: intervalId
			});
		}
	}
	handleStop(event) {
		if (this.state.intervalId != null) {
			clearInterval(this.state.intervalId);
			this.setState({
				intervalId: null
			});
		}
	}
	handleLap(event) {
		this.setState({
			laps: [...this.state.laps, this.state.counter]
		});
	}
	render() {
		let topFive = [...this.state.laps].reverse().slice(0, 5);
		// let topFive = [...this.state.laps].slice(this.state.laps.length - 6, this.state.laps.length);
		return (
			<>
				<div className={`counter ${this.props.bgColor}`}>
					<div className="col">
						<i className="far fa-clock" />
					</div>
					<div className="col">
						{Math.floor(this.state.counter / 1000) % 10}
					</div>
					<div className="col">
						{Math.floor(this.state.counter / 100) % 10}
					</div>
					<div className="col">
						{Math.floor(this.state.counter / 10) % 10}
					</div>
					<div className="col">
						{Math.floor(this.state.counter / 1) % 10}
					</div>
				</div>
				<div className="row justify-content-center mt-4">
					<button
						className="btn-success mx-2"
						onClick={this.startCounter}>
						{"start"}
					</button>
					<button
						className="btn-danger mx-2"
						onClick={this.handleStop}>
						{"stop"}
					</button>
					<button
						className="btn-warning mx-2"
						onClick={this.handleLap}>
						{"lap"}
					</button>
					<button
						className="btn-primary mx-2"
						onClick={e => this.props.randomizeBg()}>
						{"change color"}
					</button>
					<button
						className="btn-info mx-2"
						onClick={e => {
							this.setState({
								counter: 0,
								laps: []
							});
						}}>
						{"reset"}
					</button>
				</div>
				<div className="row justify-content-center mt-4 text-light">
					<div className="col text-center">
						{topFive.map((lap, index) => {
							return (
								<h2 key={index}>{`lap ${this.state.laps.length -
									index}: ${lap} seconds...`}</h2>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}

Timer.propTypes = {
	bgColor: PropTypes.string,
	randomizeBg: PropTypes.func
};

export default Timer;
