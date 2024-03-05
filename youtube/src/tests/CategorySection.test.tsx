import React from "react";
import { fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { CategorySection } from "components/CategorySection";
import { lightTheme } from "components/styled/Theme";
import { renderWithProviders, setupStore } from "./util/test-util";

import "@testing-library/jest-dom";
import "jest-styled-components";

const theme = lightTheme;

test("changes color and category on click", async () => {
  const store = setupStore();

  const { getByText } = renderWithProviders(
    <ThemeProvider theme={theme}>
      <CategorySection />
    </ThemeProvider>,
    { store }
  );

  const button = getByText("action") as HTMLButtonElement;

  expect(button).toHaveStyleRule("color", theme.colors.tab.default.font);

  fireEvent.click(button);

  expect(store.getState().params.category).toEqual("action");
  expect(button).toHaveStyleRule("color", theme.colors.tab.active.font);
});
