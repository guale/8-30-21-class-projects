import "./App.css";
import PetStore from "./components/PetStore";
import ViewCount from "./components/ViewCount";
import IncrButton from "./components/IncrButton";
import React, { useState } from "react";

function App() {
	// let data = [
	// 	{
	// 		name: "Bob Billy",
	// 		location: "The hills",
	// 	},
	// 	{
	// 		name: "Billy Bob",
	// 		location: "The hills",
	// 	},
	// ];

	// let elements = data.map((person, index) => (
	// 	<li key={index}>
	// 		Name: {person.name}
	// 		Location: {person.location}
	// 	</li>
	// ));

	// return (
	// 	<div className="App">
	// 		<ul>{elements}</ul>
	// 	</div>
	// );

	const [count, setCount] = useState(0);

	const handleIncrButton = () => {
		setCount(count + 1);
	};

	return (
		// <PetStore/>
		<div>
			<ViewCount count={count} />
			<IncrButton handleIncrButton={handleIncrButton} />
		</div>
	);
}

export default App;
