import React from "react";
import Container from "./layouts/Container";
import Control from "./layouts/Control";
import Flow from "./layouts/Flow";
import Trending from "./layouts/Trending";

export default function App() {
  return (
    <Container>
      <Control />
      <Flow />
      <Trending />
    </Container>
  )
}