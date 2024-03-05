import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Main, NotFound } from "pages";
import { FontStyles, GlobalStyle, NormalStyle } from "components/styled";
import { getTheme } from "store/slice";

export const App: React.FC = () => {
  const theme = useSelector(getTheme);

  return (
    <ThemeProvider theme={theme}>
      <NormalStyle />
      <GlobalStyle />
      <FontStyles />

      <Routes>
        <Route path="/" element={<Main />} />:
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};
