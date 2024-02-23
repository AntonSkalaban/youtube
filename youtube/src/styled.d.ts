import "styled-components";

import { Theme } from "./const/themeType";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    type: ThemeEnum;
    colors: {
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
    };
  }
}
