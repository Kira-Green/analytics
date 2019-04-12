import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";

function initializeReactGA() {
	ReactGA.initialize("UA-138205808-1");
	ReactGA.pageview("/homepage");
}

ReactGA.event({
	category: "User",
	action: "Create an Account"
});

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
