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
}
