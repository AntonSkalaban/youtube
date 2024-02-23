import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.font};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
 
`;
