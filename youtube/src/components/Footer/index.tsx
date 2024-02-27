import React from "react";
import { icons } from "const/footerData";
import { Wrapper } from "components/Wrapper";
import {
  BottomText,
  FooterContainer,
  FooterNav,
  FooterText,
  FooterTextContainer,
  FooterWrapper,
  FooterLink,
} from "./styled";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <FooterContainer>
          <FooterTextContainer>
            <FooterText>
              TermsPrivacyPolicy & Safety <br />
              How YouTube works <br />
              Test new features
            </FooterText>

            <FooterText>
              About Press Copyright <br />
              Contact us Creators <br />
              Advertise Developers
            </FooterText>
          </FooterTextContainer>

          <FooterNav>
            {icons.map(({ component, url }) => {
              return (
                <FooterLink href={url} target="_blank" key={url} rel="noreferrer">
                  {component}
                </FooterLink>
              );
            })}
          </FooterNav>
        </FooterContainer>
        <BottomText>2023 Modsen company</BottomText>
      </Wrapper>
    </FooterWrapper>
  );
};
