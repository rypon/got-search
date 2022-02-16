import React, { useState } from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

function CharacterCard({ characters }) {
  const { name, image, house, bio } = characters;

  const [flipCard, setFlipCard] = useState(false);

  function handleFlipCardClick() {
    setFlipCard(!flipCard);
  }

  return (
    <Card>
      <Image src={flipCard === false ? image : null} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{flipCard === false ? name : null}</Card.Header>
        <Card.Meta>
          <Icon name={flipCard === false ? "chess rook" : null} />
          {flipCard === false ? `House ` + house : null}
        </Card.Meta>
        <Card.Description>{flipCard === false ? null : bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={handleFlipCardClick}
          style={{ cursor: "pointer" }}
          circular={true}
        >
          {flipCard === false ? `Read Bio` : `Back`}
        </Button>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
