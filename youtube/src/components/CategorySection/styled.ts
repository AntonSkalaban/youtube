import { Button } from "components/styled/StyledComponents";
import styled from "styled-components";

export const CategoryContainer = styled.section`
  height: 54px;
  border-top: ${({ theme }) => theme.borders.thin};
  border-bottom: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
  @media ${({ theme }) => theme.media.medium} {
    border: none;
  }
  @media ${({ theme }) => theme.media.small} {
    height: 68px;
    border: none;
    margin-top: 20px;
  }
  @media ${({ theme }) => theme.media.extasmall} {
    margin-top: 14px;
  }
`;

export const CategoryButtonsContainer = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: min-content min-content;
  grid-auto-flow: column;

  align-items: center;
  justify-content: center;
  gap: 1rem;

  gap: 8px;
  @media ${({ theme }) => theme.media.small} {
    grid-template-rows: repeat(2, 30px);
    grid-auto-flow: column dense;

    justify-content: start;

    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
`;

export const CategoryButton = styled(Button)<{ $isActive: boolean }>`
  width: fit-content;
  flex-basis: content;

  height: 30px;
  background-color: ${({ theme, $isActive }) =>
    theme.colors.tab[$isActive ? "active" : "default"].bg};

  border-radius: 15px;
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
  padding: 0 20px 0 20px;

  color: ${({ theme, $isActive }) => theme.colors.tab[$isActive ? "active" : "default"].font};
  &:hover {
    color: ${({ theme }) => theme.colors.tab.active.font};
    background-color: ${({ theme }) => theme.colors.tab.active.bg};
    transition: all 0.5s;
  }
`;
