import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { WordInput } from "./WordInput";
import { WordsList } from "./WordsList";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newWord: "",
			words: [],
			selectedIndex: null
		};
		this.setNewWord = this.setNewWord.bind(this);
		this.addWord = this.addWord.bind(this);
		this.selectWord = this.selectWord.bind(this);
	}
	setNewWord(word) {
		this.setState({
			newWord: word
		});
	}
	addWord(word) {
		this.setState({
			words: [...this.state.words, word],
			newWord: ""
		});
	}
	selectWord(index) {
		this.setState({
			selectedIndex: index
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<WordInput
						newWord={this.state.newWord}
						setNewWord={this.setNewWord}
						addWord={this.addWord}
					/>
				</div>
				<div className="row justify-content-center mt-4">
					<WordsList
						words={this.state.words}
						selectedIndex={this.state.selectedIndex}
						selectWord={this.selectWord}
					/>
				</div>
			</div>
		);
	}
}
