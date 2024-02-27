import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders, setupStore } from "./util/test-util";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeEnum, lightTheme } from "components/styled/Theme";
import { Main } from "pages/Main";

const theme = lightTheme;

test("Should toggle theme", async () => {
  const store = setupStore();

  const { getAllByTestId } = renderWithProviders(
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>,
    { store }
  );
  const themeToggle = getAllByTestId("theme-toggle")[0] as HTMLInputElement;

  expect(store.getState().theme.theme.type).toEqual(ThemeEnum.light);

  fireEvent.click(themeToggle);

  expect(store.getState().theme.theme.type).toEqual(ThemeEnum.dark);
});
