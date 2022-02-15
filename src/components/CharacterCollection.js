import React from "react";
import CharacterCard from "./CharacterCard";
import { Card } from "semantic-ui-react";

function CharacterCollection({ characters }) {
  const card = characters.map((characterObj) => (
    <CharacterCard key={characterObj.id} characters={characterObj} />
  ));

  console.log(characters);
  return <Card.Group itemsPerRow={5}>{card}</Card.Group>;
}

export default CharacterCollection;
