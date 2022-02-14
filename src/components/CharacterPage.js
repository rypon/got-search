import React, { useState, useEffect } from "react";
import CharacterCollection from "./CharacterCollection";
import CharacterForm from "./CharacterForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function CharacterPage() {


    return (
        <Container>
            <h1>Game Of Thrones Searcher</h1>
            <br />
            <CharacterForm {} />
            <br />
            <Search />
            <br />
            <CharacterCollection />
        </Container>
    );

)

}

export default CharacterPage