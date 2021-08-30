import React, { Component } from "react";
import "../css/Collection.css";
import Movies from "./Movie";

class Collection extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div className="div-collection">
					<div className="row">
						<Movies/>
					</div>
				</div>
			</div>
		);
	}
}

export default Collection