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
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)",
  },

  borders: {
    thin: "1px solid",
    normal: "2px solid",
  },

  media: {
    extraLarge: "(max-width: 1400px)",
    large: "(max-width: 1220px)",
    medium: "(max-width: 880px)",
    small: "(max-width: 660px)",
    extasmall: "(max-width: 500px)",
    xxs: "(max-width: 340px)",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: "rgb(255, 255, 255)",
    font: "rgb(0, 0, 0)",
    border: "#c4c4c4",

    tab: {
      default: {
        bg: "rgba(0, 0, 0, 0.1)",
        font: "rgb(0, 0, 0)",
      },

      active: {
        bg: "rgb(0, 0, 0)",
        font: "rgb(255, 255, 255)",
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
    font: "rgb(255, 255, 255)",
    border: "#35363a",
    tab: {
      default: {
        bg: "#272729",
        font: "rgb(255, 255, 255)",
      },

      active: {
        bg: "rgb(0, 0, 0)",
        font: "rgb(255, 255, 255)",
      },
    },
  },
};
