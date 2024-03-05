import { Title1 } from "components/styled/StyledComponents";
import { LogoContainer, LogoIcon } from "./styled";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoIcon />

      <Title1>ModsenFilms</Title1>
    </LogoContainer>
  );
};
