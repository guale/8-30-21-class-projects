import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Note.css";

const GENERIC_NOTE_TITLE = "New Title";
const GENERIC_NOTE_BODY = "New Body";

class Note extends Component {
	constructor(props) {
		super(props);
		this.titleContent = React.createRef();
		this.bodyContent = React.createRef();

		this.state = {
			title: GENERIC_NOTE_TITLE,
			body: GENERIC_NOTE_BODY,
			editMode: false,
		};
	}

	handleEdit() {
		this.setState({ editMode: true });
	}
	handleSave() {
		this.setState({
			title: this.titleContent.current.value,
			body: this.bodyContent.current.value,
			editMode: false,
		});
	}
	handleDelete() {
		this.props.deleteHandler(this.props.id);
	}

	render() {
		let titleElement;
		let bodyElement;
		let buttonArea;

		if (this.state.editMode) {
			titleElement = (
				<textarea
					ref={this.titleContent}
					className="title-textarea"
					defaultValue={this.state.title}
				/>
			);

			bodyElement = (
				<textarea
					ref={this.bodyContent}
					className="body-textarea"
					defaultValue={this.state.body}
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
			bodyElement = <p>{this.state.body}</p>;
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
				<div>
					<div className="card card-view">
						<div className="card-body">
							{titleElement}
							{bodyElement}
							{buttonArea}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Note.defaultProps = {
	title: "Title",
	body: "Body",
};

Note.propTypes = {
	title: PropTypes.string,
};

export default Note;
