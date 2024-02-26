import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "./test-util";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "components/styled/Theme";
import { CategorySection } from "components/CategorySection";
import "jest-styled-components";

const theme = lightTheme;

test("changes color on click", async () => {
  //const store = setupStore();

  const { getByText } = renderWithProviders(
    <ThemeProvider theme={theme}>
      {" "}
      <CategorySection />
    </ThemeProvider>
  );

  const button = getByText("action") as HTMLButtonElement;
  expect(button).toHaveStyleRule("color", theme.colors.tab.default.font);

  act(() => {
    fireEvent.click(button);
  });

  //   expect(store.getState().params.category).toEqual("");

  expect(button).toHaveStyleRule("color", theme.colors.tab.active.font);
});
