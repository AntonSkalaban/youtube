import { Theme } from "types/themeType";
import { DefaultTheme } from "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export const baseTheme: Theme = {
  colors: {
    grey: "#c4c4c4",
    lightGrey: "rgba(0, 0, 0, 0.1)",
    orange: "rgba(255, 138, 0, 1)",
    black: "#000",
    white: "#fff",
  },

  borders: {
    thin: "1px solid",
    normal: "2px solid",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: "#fff",
    font: "#000",
    border: "#c4c4c4",

    tab: {
      default: {
        bg: "#fff",
        font: "#000",
      },

      active: {
        bg: "#000",
        font: "#fff",
      },
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: "#1b1b1d",
    font: "#fff",
    border: "#35363a",
    tab: {
      default: {
        bg: "#272729",
        font: "#fff",
      },

      active: {
        bg: "#000",
        font: "#fff",
      },
    },
  },
};
