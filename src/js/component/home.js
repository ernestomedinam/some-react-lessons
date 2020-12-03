import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	// state, setState
	// peras, guardarPeras
	const [anotherState, setAnotherState] = useState(0);
	const [age, setAge] = useState(35);
	const [isSuccess, setIsSuccess] = useState(true);
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a
				href="#"
				className={`btn ${
					isSuccess == true ? "btn-success" : "btn-primary"
				}`}
				onClick={e => setIsSuccess(!isSuccess)}>
				{"cambiar color"}
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
