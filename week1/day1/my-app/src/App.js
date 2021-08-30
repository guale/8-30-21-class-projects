import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
import WelcomeClass from "./WelcomeClass";

function App() {
	return (
		<div>
			<h1>Hello from React.</h1>
			<Welcome name="LeVar Burton" />
			<WelcomeClass name="Jimmy" />
		</div>
	);
}

export default App;
