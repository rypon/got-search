import React, { useState } from 'react'



function CharacterCard({ name, image }) {
    return (
        <li className="card">
            <img src={image} alt={""} />
            <h4>{name}</h4>
        </li>
    )
}

export default CharacterCard