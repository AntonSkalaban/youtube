import { SearchBar } from "components/Searchbar";
import { Logo } from "components/Logo";
import { ThemeToggle } from "components/ThemeToggle";
import { Wrapper } from "components/Wrapper";
import { BurgerMenu } from "components/BurgerMenu";
import { HeaderContainer, HeaderToggleContainer } from "./styled";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <SearchBar />

        <BurgerMenu>
          <ThemeToggle />
        </BurgerMenu>

        <HeaderToggleContainer>
          <ThemeToggle />
        </HeaderToggleContainer>
      </HeaderContainer>
    </Wrapper>
  );
};
