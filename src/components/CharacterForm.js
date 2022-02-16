import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Button,
  TextArea,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";

function CharacterForm() {
  const [newCharacterName, setNewCharacterName] = useState("");
  const [newCharacterImage, setNewCharacterImage] = useState("");
  const [newCharacterHouse, setNewCharacterHouse] = useState("");
  const [newCharacterBio, setNewCharacterBio] = useState("");

  const history = useHistory();

  function addNewCharacter(e) {
    e.preventDefault();
    const newCharacter = {
      name: newCharacterName,
      image: newCharacterImage,
      house: newCharacterHouse,
      bio: newCharacterBio,
    };
    fetch("http://localhost:3000/GOTchars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    }).then((r) => r.json());

    history.push(`/add-character`);
    history.go();
  }
  return (
    <Grid centered={true}>
      <Grid.Column style={{ width: "30%", margin: "auto" }}>
        <SemanticHeader style={{ fontFamily: "Cinzel Decorative" }} size="huge">
          Add a new Character
        </SemanticHeader>
        <Segment>
          <Form onSubmit={addNewCharacter}>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder="Name"
                onChange={(e) => setNewCharacterName(e.target.value)}
              />
            </Form.Field>

            <Form.Field>
              <label>Image</label>
              <input
                placeholder="Image Link"
                onChange={(e) => setNewCharacterImage(e.target.value)}
              />
            </Form.Field>

            <Form.Field>
              <label>House</label>
              <input
                placeholder="House"
                onChange={(e) => setNewCharacterHouse(e.target.value)}
              />
            </Form.Field>

            <Form.Field>
              <label>Bio</label>
              <TextArea
                placeholder="Bio"
                onChange={(e) => setNewCharacterBio(e.target.value)}
              />
            </Form.Field>
            <Button
              style={{ width: "15%", margin: "auto" }}
              fluid
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default CharacterForm;
