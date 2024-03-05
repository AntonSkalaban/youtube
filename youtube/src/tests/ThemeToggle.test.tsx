import React from "react";
import { fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Main } from "pages/Main";
import { lightTheme, ThemeEnum } from "components/styled/Theme";
import { renderWithProviders, setupStore } from "./util/test-util";

import "@testing-library/jest-dom";
import "jest-styled-components";

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
