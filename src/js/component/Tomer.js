import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

export const Tomer = props => {
	const [counter, setCounter] = useState(0);
	const [laps, setLaps] = useState([]);
	const [intervalID, setIntervalID] = useState(null);
	const startCounter = () => {
		if (intervalID == null) {
			let id = setInterval(() => {
				setCounter(counter + 1);
			}, 1000);
			setIntervalID(id);
		}
	};
	const stopCounter = () => {
		if (intervalID != null) {
			clearInterval(intervalID);
			setIntervalID(null);
		}
	};
	useEffect(
		() => {
			const interval = setInterval(() => {
				setCounter(counter + 1);
				// console.log("This will run every second!");
			}, 1000);
			setIntervalID(interval);
			return () => clearInterval(interval);
		},
		[counter]
	);
	useEffect(
		() => {
			const sayHi = () => {
				console.log("hi");
			};
			console.log("cambio bgColor");
			sayHi();
			// console.log(counter % 5 == 0);
		},
		[counter]
	);
	return (
		<>
			<div className={`counter ${props.bgColor}`}>
				<div className="col">
					<i className="far fa-clock" />
				</div>
				<div className="col">{Math.floor(counter / 1000) % 10}</div>
				<div className="col">{Math.floor(counter / 100) % 10}</div>
				<div className="col">{Math.floor(counter / 10) % 10}</div>
				<div className="col">{Math.floor(counter / 1) % 10}</div>
			</div>
			<div className="row justify-content-center mt-4">
				<button className="btn-success mx-2" onClick={startCounter}>
					{"start"}
				</button>
				<button className="btn-danger mx-2" onClick={stopCounter}>
					{"stop"}
				</button>
				<button
					className="btn-warning mx-2"
					onClick={e => {
						setLaps([...laps, counter]);
					}}>
					{"lap"}
				</button>
				<button
					className="btn-primary mx-2"
					onClick={e => props.randomizeBg()}>
					{"change color"}
				</button>
				<button
					className="btn-info mx-2"
					onClick={e => {
						setCounter(0);
						setLaps([]);
					}}>
					{"reset"}
				</button>
			</div>
			<div className="row justify-content-center mt-4 text-light">
				<div className="col text-center">
					{laps.map((lap, index) => {
						return (
							<h2 key={index}>{`lap ${laps.length -
								index}: ${lap} seconds...`}</h2>
						);
					})}
				</div>
			</div>
		</>
	);
};

Tomer.propTypes = {
	bgColor: PropTypes.string,
	randomizeBg: PropTypes.func
};
