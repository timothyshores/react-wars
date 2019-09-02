import React from "react";

import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const CharacterCard = ({ character }) => {
	console.log("CharacterCard character", character);
	const {
		name,
		birth_year,
		eye_color,
		gender,
		height,
		mass,
		skin_color,
		films
	} = character;
	return (
		<>
			<Card>
				<CardBody>
					<CardTitle>{name}</CardTitle>
					<CardText> Born: {birth_year}</CardText>
					<CardText> Eye Color: {eye_color}</CardText>
					<CardText> Gender: {gender}</CardText>
					<CardText> Height: {height}</CardText>
					<CardText> Mass: {mass}</CardText>
					<CardText> Skin Color: {skin_color}</CardText>
					<CardText> Number of Films: {films.length}</CardText>
				</CardBody>
			</Card>
		</>
	);
};

export default CharacterCard;
