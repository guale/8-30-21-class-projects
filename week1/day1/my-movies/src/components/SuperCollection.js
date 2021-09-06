import React, { Component } from "react";
import Collection from "./Collection";

class SuperCollection extends Component {
	constructor() {
		super();
		this.state = {
			collections: [],
		};
	}

	componentWillMount(){
		this.addCollection();
	}

	addCollection() {
		let collections = this.state.collections;
		collections.push({ id: Date.now() });
		this.setState({ collections });
	}

	deleteCollection(id) {
		let newCollectionArr = this.state.collections;
		newCollectionArr.map((collection, index) => {
			if ((id === collection.id)) {
				newCollectionArr.splice(index, 1);
			}
		});

		this.setState({ collections: newCollectionArr });
	}

	render() {
		return (
			<div className="container">
					<div>
						{this.state.collections.map((collections) => (
							<Collection
								key={collections.id}
								id={collections.id}
								title={collections.title}
								deleteHandler={this.deleteCollection.bind(this)}
							/>
						))}
					</div>
				<div>
					<button
						onClick={this.addCollection.bind(this)}
						className="btn btn-success add-button"
					>
						Add Collection
					</button>
				</div>
			</div>
		);
	}
}

export default SuperCollection;