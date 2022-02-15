import React from "react";
import {
  Form,
  Button,
  TextArea,
  Grid,
  Dropdown,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";

const options = [
  { key: 1, text: "Stark", value: 1 },
  { key: 2, text: "Lannister", value: 2 },
  { key: 3, text: "Baratheon", value: 3 },
  { key: 4, text: "Targaryen", value: 4 },
  { key: 5, text: "Greyjoy", value: 5 },
  { key: 6, text: "Arryn", value: 6 },
  { key: 7, text: "Martell", value: 7 },
  { key: 8, text: "Tully", value: 8 },
  { key: 9, text: "Tyrell", value: 9 },
];

function CharacterForm() {
  return (
    <Grid centered={true}>
      <Grid.Column style={{ width: "30%", margin: "auto" }}>
        <SemanticHeader size="huge">Add a new Character</SemanticHeader>
        <Segment>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder="Name" />
            </Form.Field>

            <Form.Field>
              <label>Image</label>
              <input placeholder="Image Link" />
            </Form.Field>

            <Form.Field>
              <label>House</label>
              <Dropdown
                selection
                options={options}
                placeholder="Choose an option"
              />
            </Form.Field>

            <Form.Field>
              <label>Bio</label>
              <TextArea placeholder="Bio" />
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
