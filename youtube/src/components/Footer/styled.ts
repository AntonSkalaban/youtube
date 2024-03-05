import { styled } from "styled-components";
import { flex } from "components/styled";
import { Title2 } from "components/styled/StyledComponents";

export const FooterWrapper = styled.footer`
  border-top: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
`;

export const FooterContainer = styled.div`
  width: 100%;

  ${flex({ jc: "space-between" })}

  margin-top: 65px;
  padding-left: 36px;

  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  @media ${({ theme }) => theme.media.small} {
    margin-top: 5px;
  }
`;

export const FooterTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  gap: 30px;

  @media ${({ theme }) => theme.media.large} {
    text-align: center;
  }

  @media ${({ theme }) => theme.media.small} {
    ${flex({ fd: "column-reverse", jc: "strat", ai: "start", g: "0" })}
  }

  @media ${({ theme }) => theme.media.xxs} {
    text-align: left;
    margin-bottom: 28px;
  }
`;

export const FooterText = styled(Title2)<{ color?: string }>`
  width: 293px;
  height: 92px;
  color: ${({ theme, color }) => (color ? color : theme.colors.font)};

  @media ${({ theme }) => theme.media.large} {
    width: 200px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.xxs} {
    height: 65px;
  }
`;

export const FooterNav = styled.div`
  height: 20px;

  ${flex({ ai: "top", g: "27px" })}

  margin-right: 10px;

  @media ${({ theme }) => theme.media.medium} {
    margin-right: 0;
    margin-bottom: 38px;
  }
`;

export const FooterLink = styled.a`
  width: 16px;
  height: 16px;

  &:hover {
    scale: 1.2;
  }
`;

export const BottomText = styled(Title2)`
  text-align: center;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 18px;

  @media ${({ theme }) => theme.media.small} {
    font-size: 12px;
    line-height: 14px;
  }
`;
