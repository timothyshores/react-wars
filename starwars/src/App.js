import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterCard from "./components/CharacterCard";

import { Spinner } from "reactstrap";
import "./App.css";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get("https://swapi.co/api/people/")
			.then(res => {
				console.log("App.js res.data.results", res.data.results);
				setCharacters(res.data.results);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			{characters.length === 0 ? (
				<Spinner
					color="danger"
					style={{ width: "10rem", height: "10rem", marginTop: "25vh" }}
				/>
			) : (
				characters.map(character => (
					<CharacterCard key={character.name} character={character} />
				))
			)}
		</div>
	);
};

export default App;
