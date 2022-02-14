import React, { useState, useEffect } from "react";
import CharacterCollection from "./CharacterCollection";
import CharacterForm from "./CharacterForm";
import Search from "./Search";
//import { Container } from "semantic-ui-react";


function CharacterPage() {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/GOTchars')
            .then(r => r.json())
            .then(data => setCharacter(data))
    }, [])

    return (
        <div>

            <h1>Game Of Thrones Searcher</h1>
            <br />
            <CharacterForm />
            <br />
            <Search />
            <br />
            <CharacterCollection character={character} />

        </div>
    );

}

export default CharacterPage;