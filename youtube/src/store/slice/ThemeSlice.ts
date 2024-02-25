import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum, darkTheme, lightTheme } from "components/styled/Theme";
import { DefaultTheme } from "styled-components";

const initialState: { theme: DefaultTheme } = {
  theme: lightTheme,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThem: (state) => {
      state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme;
    },
  },
  selectors: {
    getTheme: (state) => state.theme,
    getThemeType: (state) => state.theme.type,
  },
});

export const { toggleThem } = ThemeSlice.actions;
export const { getTheme, getThemeType } = ThemeSlice.selectors;

export default ThemeSlice.reducer;
