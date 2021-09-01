import logo from "./logo.svg";
import "./App.css";

function App() {
	let data = [
		{
			name: "Bob Billy",
			location: "The hills",
		},
		{
			name: "Billy Bob",
			location: "The hills",
		},
	];

	let elements = data.map((person, index) => (
		<li>
			Name: {person.name} Location: {person.location}
		</li>
	));

	return (
		<div className="App">
			<ul>{elements}</ul>
		</div>
	);
}

export default App;
