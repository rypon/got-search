import React, { useState, useEffect } from "react";
import CharacterCollection from "./CharacterCollection";
import CharacterForm from "./CharacterForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/GOTchars")
      .then((resp) => resp.json())
      .then((characterArray) => setCharacters(characterArray));
  }, []);

  return (
    <Container textAlign={"center"}>
      <h1>Game Of Thrones Searcher</h1>
      <br />
      <CharacterForm />
      <br />
      <Search />
      <br />
      <CharacterCollection characters={characters} />
    </Container>
  );
}

export default CharacterPage;
