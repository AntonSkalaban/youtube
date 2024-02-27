import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getTheme } from "store/slice";
import { FontStyles, GlobalStyle, NormalStyle } from "components/styled";
import { Main } from "pages/Main";

export const App: React.FC = () => {
  console.log(getTheme);
  const theme = useSelector(getTheme);

  return (
    <ThemeProvider theme={theme}>
      <NormalStyle />
      <GlobalStyle />
      <FontStyles />

      <Main />
    </ThemeProvider>
  );
};
