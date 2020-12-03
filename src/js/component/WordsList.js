import React from "react";
import PropTypes from "prop-types";
import { WordInput } from "./WordInput";

export const WordsList = props => {
	return (
		<ul className="p-0">
			{props.words.map((word, index) => {
				return (
					<li
						className={`bg-warning item my-2 text-center${
							props.selectedIndex == index ? " selected" : ""
						}`}
						key={index}
						onClick={() => props.selectWord(index)}>
						{word}
					</li>
				);
			})}
		</ul>
	);
};

WordsList.propTypes = {
	words: PropTypes.array,
	selectedIndex: PropTypes.any,
	selectWord: PropTypes.func
};
