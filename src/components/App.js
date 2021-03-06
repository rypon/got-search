import React, { useState, useEffect } from "react";
import CharacterPage from "./CharacterPage";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import HomePage from "./HomePage";
import "../App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/GOTchars")
      .then((resp) => resp.json())
      .then((characterArray) => setCharacters(characterArray));
  }, []);

  const updatedCharacters = (character) =>
    setCharacters([...characters, character]);

  const filteredChars = characters.filter(({ name }) =>
    name.toLowerCase().includes(searchChar.toLowerCase())
  );

  const [page, setPage] = useState("/");

  return (
    <div className="App">
      <Header onChangePage={setPage} />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/add-character">
          <CharacterForm updatedCharacters={updatedCharacters} />
        </Route>

        <Route path="/characters">
          <CharacterPage
            setSearchChar={setSearchChar}
            characters={filteredChars}
          />
        </Route>

        {/* <Route path="*">
          <h1>404 not found</h1>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
