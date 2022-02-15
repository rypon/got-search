import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenuExampleInvertedSegment() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment raised>
      <Menu secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/characters"
          name="Characters"
          active={activeItem === "characters"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/add-character"
          name="Add Character"
          active={activeItem === "add character"}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}

export default MenuExampleInvertedSegment;
