import React from "react";
import { GlobalStyle } from "components/GlobalStyle/styled";
import { Main } from "pages/Main";
import { Provider } from "react-redux";
import { store } from "store";
import { FontStyles } from "components/FontsStyle/styled";
import { baseTheme } from "components/Theme";
import { ThemeProvider } from "styled-components";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <FontStyles />
        <Main />
      </ThemeProvider>
    </Provider>
  );
};
