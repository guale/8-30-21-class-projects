import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Movie.css";

const GENERIC_MOVIE_TITLE = "New Movie";
const GENERIC_MOVIE_YEAR = 0;
const GENERIC_MOVIE_GENRE = "Genre";
const GENERIC_MOVIE_DESC = "Description";

class Movie extends Component {
	constructor(props) {
		super(props);
		this.titleContent = React.createRef();
		this.yearContent = React.createRef();
		this.genreContent = React.createRef();
		this.descContent = React.createRef();

		this.state = {
			title: GENERIC_MOVIE_TITLE,
			year: GENERIC_MOVIE_YEAR,
			genre: GENERIC_MOVIE_GENRE,
			desc: GENERIC_MOVIE_DESC,
			editMode: false,
		};
	}

	handleEdit() {
		this.setState({ editMode: true });
	}
	handleSave() {
		this.setState({
			title: this.titleContent.current.value,
			year: this.yearContent.current.value,
			genre: this.genreContent.current.value,
			desc: this.descContent.current.value,
			editMode: false,
		});
	}
	handleDelete() {
		this.props.deleteHandler(this.props.id);
	}

	render() {
		let titleElement;
		let yearElement;
		let genreElement;
		let descElement;
		let buttonArea;

		if (this.state.editMode) {
			titleElement = (
				<input
					ref={this.titleContent}
					className="title-input edit-input"
					defaultValue={this.state.title}
				/>
			);
			yearElement = (
				<input
					ref={this.yearContent}
					className="year-input edit-input"
					defaultValue={this.state.year}
				/>
			);
			genreElement = (
				<input
					ref={this.genreContent}
					className="genre-input edit-input"
					defaultValue={this.state.genre}
				/>
			);
			descElement = (
				<textarea
					ref={this.descContent}
					className="desc-textarea edit-input"
					defaultValue={this.state.desc}
				/>
			);
			buttonArea = (
				<div>
					<button
						className="btn btn-primary"
						onClick={this.handleSave.bind(this)}
					>
						Save
					</button>
				</div>
			);
		} else {
			titleElement = <h5 className="card-title">{this.state.title}</h5>;
			yearElement = <span>{this.state.year};</span>;
			genreElement = <span>{this.state.genre}</span>;
			descElement = <span>{this.state.desc}</span>;
			buttonArea = (
				<div>
					<button
						onClick={this.handleEdit.bind(this)}
						className="btn btn-info"
					>
						Edit
					</button>
					<button
						onClick={this.handleDelete.bind(this)}
						className="btn btn-danger"
					>
						Delete
					</button>
				</div>
			);
		}

		return (
			<div className="col-sm-6">
				<div className="card-view">
					<div className="card">
						<div className="card-header">{titleElement}</div>
						<ul class="list-group list-group-flush">
							<li className="list-group-item">
								Year: {yearElement}
							</li>
							<li className="list-group-item">
								Genre: {genreElement}
							</li>
							<li className="list-group-item">
								Description: {descElement}
							</li>
						</ul>
						<div className="card-footer">{buttonArea}</div>
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
