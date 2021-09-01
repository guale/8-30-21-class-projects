import React, { Component } from "react";
import "../css/Collection.css";
import Movie from "./Movie";

const GENERIC_COLLECTION_TITLE = "New Collection";

class Collection extends Component {
	constructor() {
		super();
		this.state = {
			title: GENERIC_COLLECTION_TITLE,
			movies: [],
		};
	}

	componentWillMount(){
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
			if ((id === movie.id)) {
				newMovieArr.splice(index, 1);
			}
		});

		this.setState({ movies: newMovieArr });
	}

	render() {
		return (
			<div className="container">
				<div className="div-collection">
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
				</div>
				<div>
					<button
						onClick={this.addMovie.bind(this)}
						className="btn btn-success add-button"
					>
						Add Movie
					</button>
				</div>
			</div>
		);
	}
}

export default Collection;
