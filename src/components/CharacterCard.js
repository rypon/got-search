import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

function CharacterCard({ characters }) {
  const { name, image, house, bio } = characters;
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header style={{ color: "blue", cursor: "pointer" }}>
          {name}
        </Card.Header>
        <Card.Meta>
          <Icon name="chess rook" />
          House {house}
        </Card.Meta>
        <Card.Description>{bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="chess rook" />
        {house}
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
