import { createGlobalStyle } from "styled-components";
import RobotoRegular from "assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoMedium from "assets/fonts/Roboto/Roboto-Medium.ttf";
import RobotoBold from "assets/fonts/Roboto/Roboto-Bold.ttf";

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegular}) format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMedium}) format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBold}) format('truetype');
  font-weight: 700;
}

body {
    font-family: Roboto;
}
`;
