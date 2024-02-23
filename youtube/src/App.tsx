import React from "react";
import { GlobalStyle } from "components/GlobalStyle/styled";
import { Main } from "pages/Main";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { FontStyles } from "components/FontsStyle/styled";
import { ThemeProvider } from "styled-components";
import { NormalStyle } from "components/NormalStyle/styled";

export const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <ThemeProvider theme={theme}>
      <NormalStyle />
      <GlobalStyle />

      <FontStyles />
      <Main />
    </ThemeProvider>
  );
};
