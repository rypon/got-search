import React, { useCallback } from "react";
import { Embed, Container, Header, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/characters"),
    [history]
  );
  return (
    <Container>
      <Header
        style={{ fontFamily: "Cinzel Decorative" }}
        size="huge"
        textAlign="center"
      >
        Game Of Thrones
      </Header>

      <Button
        style={{ marginBottom: 20 }}
        type="button"
        onClick={handleOnClick}
        circular={true}
      >
        View Characters
      </Button>

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
