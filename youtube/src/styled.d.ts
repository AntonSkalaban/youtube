import { Colors } from "const/themeType";
import "styled-components";

import { Theme } from "./const/themeType";

export interface DefaultColors extends Colors {
  bg: string;
  font: string;
  border: string;

  tab: {
    default: {
      bg: string;
      font: string;
    };

    active: {
      bg: string;
      font: string;
    };
  };
}
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum;
    colors: DefaultColors;
  }
}
