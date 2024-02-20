import React from "react";
import { SearchBar } from "components/Searchbar";
import { Logo } from "components/Logo";
import { Switch } from "components/Switch";
import { HeaderContainer } from "./styled";
import { Wrapper } from "components/Wrapper";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <SearchBar />
        <Switch id="id" onChange={() => console.log("click")} toggled={false} />
      </HeaderContainer>
    </Wrapper>
  );
};
