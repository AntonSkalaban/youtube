import React from "react";
import { Header } from "components/Header";
import { Wrapper } from "components/Wrapper";
import { GlobalStyle } from "components/GlobalStyle/styled";

export const Main = () => {
  return (
    <>
      {" "}
      <GlobalStyle />
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
};
