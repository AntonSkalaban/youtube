import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum, darkTheme, lightTheme } from "components/styled/Theme";
import { DefaultTheme } from "styled-components";

const initialState: { theme: DefaultTheme } = {
  theme: localStorage.getItem("themeType") === ThemeEnum.dark ? darkTheme : lightTheme,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  selectors: {
    getTheme: (state) => state.theme,
    getThemeType: (state) => state.theme.type,
  },
});

export const { setTheme } = ThemeSlice.actions;
export const { getTheme, getThemeType } = ThemeSlice.selectors;

export default ThemeSlice.reducer;
