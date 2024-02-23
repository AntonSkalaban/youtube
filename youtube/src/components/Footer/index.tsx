import React from "react";
import { icons, titles } from "const/footerData";
import { Wrapper } from "components/Wrapper";
import {
  BottomText,
  FooterContainer,
  FooterNav,
  FooterText,
  FooterTextContainer,
  StyledFooter,
} from "./styled";

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
                <a href={url} target="_blank" key={url} rel="noreferrer">
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
