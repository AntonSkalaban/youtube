export interface Colors {
  grey: string;
  lightGrey: string;
  orange: string;
  black: string;
  white: string;
}

export interface Theme {
  colors: Colors;

  borders: {
    thin: string;
    normal: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
    extasmall: string;
    xxs: string;
  };
}
