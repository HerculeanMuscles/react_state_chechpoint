import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			person: {
				fullName: "Fahri",
				bio: "A web developer",
				imgSrc: "image-url.jpg",
				profession: "Software Engineer",
			},
			shows: true,
		};
	}

	// Function to toggle the 'shows' state
	toggleShow = () => {
		this.setState((prevState) => ({
			shows: !prevState.shows,
		}));
	};

	render() {
		const { person, shows } = this.state;

		return (
			<div className="App">
				<button onClick={this.toggleShow}>Toggle Profile</button>
				{shows && (
					<>
						<img src={person.imgSrc} alt={person.fullName} />
						<h1>{person.fullName}</h1>
						<p>{person.bio}</p>
						<p>{person.profession}</p>
					</>
				)}
			</div>
		);
	}
}

export default App;
