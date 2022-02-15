import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

function MenuExampleInvertedSegment() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment raised>
      <Menu secondary>
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="About"
          active={activeItem === "about"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Add Character"
          active={activeItem === "add character"}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}

export default MenuExampleInvertedSegment;
