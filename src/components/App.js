import React, { useState } from "react";
import CharacterPage from "./CharacterPage";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import CharacterForm from "./CharacterForm";
import HomePage from "./HomePage";
import "../App.css";

function App() {
  const [page, setPage] = useState("/");

  return (
    <div className="App">
      <Header onChangePage={setPage} />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/add-character">
          <CharacterForm />
        </Route>

        <Route path="/characters">
          <CharacterPage />
        </Route>

        {/* <Route path="*">
          <h1>404 not found</h1>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
