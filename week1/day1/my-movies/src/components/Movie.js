import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Movie.css";

class Movie extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="col-sm-6">
				<div className="card-view">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">{this.props.title}</h5>
						</div>
						<ul class="list-group list-group-flush">
							<li className="list-group-item">Year: {this.props.year}</li>
							<li className="list-group-item">Genre: {this.props.genre}</li>
							<li className="list-group-item">Description: {this.props.desc}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

Movie.defaultProps = {
	title: "Title",
	year: 0,
	genre: "Genre",
	desc: "Description",
};

Movie.propTypes = {
	title: PropTypes.string,
	year: PropTypes.number,
	genre: PropTypes.string,
	desc: PropTypes.string,
};

export default Movie;
