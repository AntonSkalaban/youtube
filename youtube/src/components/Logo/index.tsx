import React from "react";
import { Title1 } from "components/styled/StyledComponents";
import { LogoIcon, LogoContainer } from "./styled";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoIcon />

      <Title1>ModsenFilms</Title1>
    </LogoContainer>
  );
};
