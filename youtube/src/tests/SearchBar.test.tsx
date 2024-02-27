import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";
import { changeCategory } from "store/slice/ParamsSlice";
import { renderWithProviders, setupStore } from "./util/test-util";
import { ThemeProvider } from "styled-components";
import { SearchBar } from "components/Searchbar";
import { darkTheme } from "components/styled/Theme";

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

  fireEvent.change(input, { target: { value: "some message" } });

  expect(input.value).toBe("some message");
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

  fireEvent.change(input, { target: { value: "some message" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

  expect(store.getState().params.title).toEqual("some message");
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
    fireEvent.change(input, { target: { value: "some message" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    store.dispatch(changeCategory("sport"));
  });

  expect(store.getState().params.category).toEqual("sport");
  expect(store.getState().params.title).toEqual("");

  expect(input.value).toBe("");
});
