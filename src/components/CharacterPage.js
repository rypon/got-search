import React, { useState, useEffect } from "react";
import CharacterCollection from "./CharacterCollection";
import CharacterForm from "./CharacterForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [searchChar, setSearchChar] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/GOTchars")
      .then((resp) => resp.json())
      .then((characterArray) => setCharacters(characterArray));
  }, []);

  const filteredChars = characters.filter(({ name }) => name.toLowerCase().includes(searchChar.toLowerCase()))

  return (
    <Container textAlign={"center"}>
      <h1>Game Of Thrones Searcher</h1>
      <br />
      <CharacterForm />
      <br />
      <Search setSearchChar={setSearchChar} />
      <br />
      <CharacterCollection characters={filteredChars} />
    </Container>
  );
}

export default CharacterPage;
