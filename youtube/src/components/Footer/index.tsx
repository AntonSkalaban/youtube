import React from "react";
import {
  BottomText,
  FooterContainer,
  FooterNav,
  FooterText,
  FooterTextContainer,
  StyledFooter,
} from "./styled";
import { Wrapper } from "components/Wrapper";
import { icons, titles } from "const/footerData";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterContainer>
          <FooterTextContainer>
            {titles.map((title) => {
              return <FooterText key={title}>{title}</FooterText>;
            })}
          </FooterTextContainer>

          <FooterNav>
            {icons.map(({ component, url }) => {
              return (
                <a href="url" target="_blank" key={url}>
                  {component}
                </a>
              );
            })}
          </FooterNav>
        </FooterContainer>
        <BottomText>2023 Modsen company</BottomText>
      </Wrapper>
    </StyledFooter>
  );
};
