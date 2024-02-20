import React from "react";
import { StyledLogo, Title } from "./styled";
import LogoIcon from "assets/svg/logo.svg";

export const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <LogoIcon height={"100%"} width={"29px"} />
      <Title>ModsenFilms</Title>
    </StyledLogo>
  );
};
