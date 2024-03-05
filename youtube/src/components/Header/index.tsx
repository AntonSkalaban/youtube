import { BurgerMenu } from "components/BurgerMenu";
import { Logo } from "components/Logo";
import { SearchBar } from "components/Searchbar";
import { ThemeToggle } from "components/ThemeToggle";
import { Wrapper } from "components/Wrapper";
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
