import React from "react";
import { StyledLogo } from "./styled";
import LogoIcon from "assets/svg/logo.svg";
import { Title1 } from "components/UI/styled";

export const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <LogoIcon width={"29px"} height={"100%"} />

      <Title1>ModsenFilms</Title1>
    </StyledLogo>
  );
};
