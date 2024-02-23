import { Button } from "components/UI/styled";
import { Colors } from "const/themeType";
import styled from "styled-components";

export const StyledSection = styled.section`
  height: 54px;
  border-top: ${({ theme }) => theme.borders.grey};
  border-bottom: ${({ theme }) => theme.borders.grey};
`;

export const TabsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledButton = styled(Button)<{ $bg: keyof Colors; color: keyof Colors }>`
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme, $bg }) => theme.colors[$bg]};
  border: ${({ theme }) => theme.borders.grey};
  padding: 0 26px 0 26px;
  color: ${({ theme, color }) => theme.colors[color]};
`;
