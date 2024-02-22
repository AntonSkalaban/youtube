import "styled-components";

import { Theme } from "./const/themeType";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
