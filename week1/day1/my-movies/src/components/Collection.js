import React, { Component } from "react";
import "../css/Collection.css";
import Movie from "./Movie";

const GENERIC_COLLECTION_TITLE = "New Collection";

class Collection extends Component {
	constructor(props) {
		super(props);
		this.titleContent = React.createRef();

		this.state = {
			title: GENERIC_COLLECTION_TITLE,
			movies: [],
			editMode: false,
		};
	}

	componentWillMount() {
		this.addMovie();
	}

	addMovie() {
		let movies = this.state.movies;
		movies.push({ id: Date.now() });
		this.setState({ movies });
	}

	deleteMovie(id) {
		let newMovieArr = this.state.movies;
		newMovieArr.map((movie, index) => {
			if (id === movie.id) {
				newMovieArr.splice(index, 1);
			}
		});

		this.setState({ movies: newMovieArr });
	}

	handleEdit() {
		this.setState({ editMode: true });
	}
	handleSave() {
		this.setState({
			title: this.titleContent.current.value,
			editMode: false,
		});
	}
	handleDelete() {
		this.props.deleteHandler(this.props.id);
	}

	render() {
		let titleElement;

		if (this.state.editMode) {
			titleElement = (
				<div>
					<input
						ref={this.titleContent}
						className="title-input"
						defaultValue={this.state.title}
					/>
					<button
						className="btn btn-primary"
						onClick={this.handleSave.bind(this)}
					>
						Save
					</button>
				</div>
			);
		} else {
			titleElement = (
				<div>
					<h2 className="card-title">{this.state.title}</h2>
					<div className="button-area">
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
				</div>
			);
		}

		return (
			<div className="container">
				<div className="card-view">
					<div className="card">
						<div className="card-header">{titleElement}</div>
						<div className="row">
							{this.state.movies.map((movies) => (
								<Movie
									key={movies.id}
									id={movies.id}
									title={movies.title}
									year={movies.year}
									genre={movies.genre}
									desc={movies.desc}
									deleteHandler={this.deleteMovie.bind(this)}
								/>
							))}
						</div>
						<div className="card-footer">
							<button
								onClick={this.addMovie.bind(this)}
								className="btn btn-success add-button"
							>
								Add Movie
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Collection;
