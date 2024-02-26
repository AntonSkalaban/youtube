import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";
import { SearchBar } from "components/Searchbar";
import { renderWithProviders, setupStore } from "./test-util";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "components/styled/Theme";
import { changeCategory } from "store/slice/ParamsSlice";

const theme = darkTheme;

test("Input works", () => {
  const store = setupStore();
  const { getByPlaceholderText } = renderWithProviders(
    <ThemeProvider theme={theme}>
      {" "}
      <SearchBar />
    </ThemeProvider>
  );

  const input = getByPlaceholderText("Search...") as HTMLInputElement;

  fireEvent.change(input, { target: { value: "Тестовий запит" } });

  expect(input.value).toBe("Тестовий запит");
  expect(store.getState().params.title).toEqual("");
});

test("Should change the global state", () => {
  const store = setupStore();

  const { getByPlaceholderText } = renderWithProviders(
    <ThemeProvider theme={theme}>
      {" "}
      <SearchBar />
    </ThemeProvider>,
    { store }
  );

  const input = getByPlaceholderText("Search...") as HTMLInputElement;

  fireEvent.change(input, { target: { value: "Тестовий запит" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

  expect(store.getState().params.title).toEqual("Тестовий запит");
});

test("Should reset value when changing category", () => {
  const store = setupStore();

  const { getByPlaceholderText } = renderWithProviders(
    <ThemeProvider theme={theme}>
      {" "}
      <SearchBar />
    </ThemeProvider>,
    { store }
  );

  const input = getByPlaceholderText("Search...") as HTMLInputElement;

  act(() => {
    fireEvent.change(input, { target: { value: "Тестовий запит" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    store.dispatch(changeCategory("sport"));
  });

  expect(store.getState().params.category).toEqual("sport");
  expect(store.getState().params.title).toEqual("");

  expect(input.value).toBe("");
});
