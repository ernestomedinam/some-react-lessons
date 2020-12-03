import React from "react";
import PropTypes from "prop-types";

export const WordInput = props => {
	return (
		<>
			<input
				type="text"
				className="form-control mt-3"
				placeholder="add new word..."
				value={props.newWord}
				onChange={event => {
					props.setNewWord(event.target.value);
				}}
			/>
			<button
				className="btn btn-primary my-2"
				onClick={event => {
					props.addWord(props.newWord);
				}}>
				{"agregar palabra"}
			</button>
		</>
	);
};

WordInput.propTypes = {
	newWord: PropTypes.string,
	setNewWord: PropTypes.func,
	addWord: PropTypes.func
};
