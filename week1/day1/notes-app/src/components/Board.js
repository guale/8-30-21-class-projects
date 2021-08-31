import React, { Component } from "react";
import "../css/Board.css";
import Note from "./Note";

class Board extends Component {
	constructor() {
		super();
		this.state={
			notes:[]
		}
	}

	addNote() {
		let notes = this.state.notes;
		notes.push({
			id: Date.now(),
		});

		this.setState({ notes });
	}

	deleteNote(id) {
		let newNoteArray = this.state.notes;
		newNoteArray.map((note, index) => {
			if (id === note.id) {
				newNoteArray.splice(index, 1);
			}
		});

		this.setState({ notes: newNoteArray });
	}

	render() {
		return (
			<div>
				<div className="div-board">
					<div className="row">
						{
						this.state.notes.map(note => 
							<Note
								key={note.id}
								id={note.id}
								title={note.title}
								body={note.body}
								deleteHandler={this.deleteNote.bind(this)}
							/>)
						}
					</div>
				</div>
				<div>
					<button
						onClick={this.addNote.bind(this)}
						className="btn btn-success add-button"
					>
						Add
					</button>
				</div>
			</div>
		);
	}
}

export default Board;
