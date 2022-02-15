import React from "react";
import { Form, Button } from "semantic-ui-react";

function CharacterForm() {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
      </Form.Group>
      <Button style={{ width: "50%", margin: "auto" }} fluid type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CharacterForm;
