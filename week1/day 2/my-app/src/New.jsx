import React, { useState, useEffect } from "react";

const New = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		console.log("Component did mount");
	},[]);

	useEffect(() => {
		console.log("Component did update");
	});

	const handleDivClick = (e) => {
		console.log("Handle Click", e.target);
	}

	const handleInput = (e) => {
		console.log("Handle Input", e.target.value)
	}

	return (
		<div>
			<div>{count}</div>
			<button onClick={handleClick}>Increment</button>

			<div onClick={handleDivClick}>Clickable Div</div>
			<input onInput={handleInput}></input>
		</div>
	);
};

export default New;
