import { Fragment } from "react";
import { titles, icons } from "constants/index";
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
            {Object.keys(titles).map((key) => {
              return (
                <FooterText key={key}>
                  {titles[key].map((text) => {
                    return (
                      <Fragment key={text}>
                        {text}
                        <br />
                      </Fragment>
                    );
                  })}
                </FooterText>
              );
            })}
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
        <BottomText>{new Date().getFullYear()} Modsen company</BottomText>
      </Wrapper>
    </FooterWrapper>
  );
};
