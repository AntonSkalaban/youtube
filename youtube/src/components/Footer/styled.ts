import { Title2 } from "components/UI/styled";
import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  border-top: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-between;

  margin-top: 71px;
  margin-left: 40px;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  gap: 60px;
`;

export const FooterText = styled(Title2)<{ color?: string }>`
  max-width: 260px;
  height: 92px;
  color: ${({ theme, color }) => (color ? color : theme.colors.font)};
`;

export const FooterNav = styled.div`
  height: 20px;
  display: flex;
  align-items: top;
  gap: 27px;
`;

export const BottomText = styled(Title2)`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  margin-bottom: 18px;
`;
