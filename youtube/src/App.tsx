import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { ThemeProvider } from "styled-components";
import { FontStyles, GlobalStyle, NormalStyle } from "components/styled";
import { Main } from "pages/Main";

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
