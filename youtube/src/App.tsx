import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Main } from "pages/Main";
import { FontStyles, GlobalStyle, NormalStyle } from "components/styled";
import { getTheme } from "store/slice";

export const App: React.FC = () => {
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
