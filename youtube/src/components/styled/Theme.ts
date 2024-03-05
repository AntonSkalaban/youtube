import { DefaultTheme } from "styled-components";
import { Theme } from "types/themeType";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export const baseTheme: Theme = {
  colors: {
    grey: "rgba(196, 196, 196, 1)",
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
    bg: "rgba(255, 255, 255, 1)",
    font: "rgba(0, 0, 0, 1)",
    border: "rgba(196, 196, 196, 1)",

    tab: {
      default: {
        bg: "rgba(0, 0, 0, 0.1)",
        font: "rgba(0, 0, 0, 1)",
      },

      active: {
        bg: "rgba(0, 0, 0)",
        font: "rgba(255, 255, 255, 1)",
      },
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: "rgba(27, 27, 29, 1)",
    font: "rgba(255, 255, 255, 1)",
    border: "rgba(53, 54, 58, 1)",
    tab: {
      default: {
        bg: "rgba(39, 39, 41, 1)",
        font: "rgba(255, 255, 255, 1)",
      },

      active: {
        bg: "rgba(0, 0, 0, 1)",
        font: "rgba(255, 255, 255, 1)",
      },
    },
  },
};
