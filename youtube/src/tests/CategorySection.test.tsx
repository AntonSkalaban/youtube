import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { renderWithProviders, setupStore } from "./util/test-util";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "components/styled/Theme";
import { CategorySection } from "components/CategorySection";

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
