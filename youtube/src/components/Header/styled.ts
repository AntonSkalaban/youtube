import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: transparent;
  min-height: 68px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
  @media ${({ theme }) => theme.media.medium} {
    grid-template-rows: 51px auto;
    grid-template-columns: auto auto;
    align-items: center;
  }
`;

export const HeaderToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media ${({ theme }) => theme.media.medium} {
    grid-area: 1 / 2 / 2 / 3;
  }
  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`;
