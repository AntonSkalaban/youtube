import React from "react";
import { SearchBar } from "components/Searchbar";
import { Logo } from "components/Logo";
import { ThemeToggle } from "components/ThemeToggle";
import { Wrapper } from "components/Wrapper";
import { HeaderContainer } from "./styled";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <SearchBar />
        <ThemeToggle />
      </HeaderContainer>
    </Wrapper>
  );
};
