import React, { Component } from "react";

export default class PetStore extends Component {
	constructor() {
		super();
		this.state = {
			petList: [],
			petName: "",
			petBreed: "",
			petAge: 0,
		};
	}

	handleNameInput = (e) => {
		this.setState({ petName: e.target.value });
	};
	handleBreedInput = (e) => {
		this.setState({ petBreed: e.target.value });
	};
	handleAgeInput = (e) => {
		this.setState({ petAge: e.target.value });
	};

	handleClick = () => {
		let petObj = {
			petName: this.state.petName,
			petBreed: this.state.petBreed,
			petAge: this.state.petAge,
		};
		this.setState({
			petList: [...this.state.petList, petObj],
			petName: "",
			petBreed: "",
			petAge: 0,
		});
	};

	render() {
		let petElementArr = this.state.petList.map((animal, index) => (
			<div key={index}>
				Name: {animal.petName} Breed: {animal.petBreed} Age: {animal.petAge}
			</div>
		));

		return (
			<div>
				<h4>Pet Store Animals</h4>
				{petElementArr}
				<input
					value={this.state.petName}
					onChange={this.handleNameInput}
					placeholder="Pet Name"
				/>
				<input
					value={this.state.petBreed}
					onChange={this.handleBreedInput}
					placeholder="Pet Breed"
				/>
				<input
					value={this.state.petAge}
					onChange={this.handleAgeInput}
					placeholder="Pet Age"
				/>
				<button onClick={this.handleClick}>Add Animal</button>
			</div>
		);
	}
}
