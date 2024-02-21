import React from "react";
import { Header } from "components/Header";
import { Wrapper } from "components/Wrapper";
import { GlobalStyle } from "components/GlobalStyle/styled";
import { movieAPI } from "../../store/api/MovieApi";

export const Main = () => {
  const { data, isError, isFetching } = movieAPI.useGetMoviesBySearchQuery({});

  console.log(data, isError, isFetching);
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
