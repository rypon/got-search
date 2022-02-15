import React from "react";
import { Embed, Container, Header } from "semantic-ui-react";

function HomePage() {
  return (
    <Container>
      <Header size="huge" textAlign="center">
        Game of Thrones
      </Header>
      <Embed
        aspectRatio="4:3"
        autoplay={true}
        active={true}
        brandedUI
        color="white"
        hd={true}
        id="KPLWWIOCOOQ"
        placeholder="https://s10019.cdn.ncms.io/d19/wp-content/uploads/2019/04/thumbnail-731baa0f81ce51de904a9b1af53ed7dd.jpeg"
        source="youtube"
      />
    </Container>
  );
}

export default HomePage;
