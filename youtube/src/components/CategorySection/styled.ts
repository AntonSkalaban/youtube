import { Button } from "components/styled/StyledComponents";
import styled from "styled-components";

export const CategoryContainer = styled.section`
  height: 54px;
  border-top: ${({ theme }) => theme.borders.thin};
  border-bottom: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
`;

export const CategoryButtonsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CategoryButton = styled(Button)<{ $isActive: boolean }>`
  height: 30px;
  background-color: ${({ theme, $isActive }) =>
    theme.colors.tab[$isActive ? "active" : "default"].bg};

  border-radius: 15px;
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
  padding: 0 26px 0 26px;

  color: ${({ theme, $isActive }) => theme.colors.tab[$isActive ? "active" : "default"].font};
`;
