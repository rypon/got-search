import React from 'react'
import CharacterCard from './CharacterCard'

function CharacterCollection({ character }) {

    return (
        <div>
            {character.map((characterObj => <CharacterCard key={characterObj.id} character={characterObj} />))}
        </div>
    )
}

export default CharacterCollection