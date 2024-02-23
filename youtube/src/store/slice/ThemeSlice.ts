import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum, darkTheme, lightTheme } from "components/Theme";
import { DefaultTheme } from "styled-components";

const initialState: { theme: DefaultTheme } = {
  theme: lightTheme,
};

export const ThemeSlice = createSlice({
  name: "them",
  initialState,
  reducers: {
    toggleThem: (state) => {
      state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme;
    },
  },
});

export const { toggleThem } = ThemeSlice.actions;

export default ThemeSlice.reducer;
