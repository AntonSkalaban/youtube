import { flex } from "components/styled";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 627px;
  height: 38px;
  ${flex({ jc: "center" })}
  position: relative;

  @media ${({ theme }) => theme.media.extraLarge} {
    width: 600px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 500px;
  }

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
    grid-area: 2 / 1 / 3 / 3;
  }

  @media ${({ theme }) => theme.media.small} {
    margin-top: 15px;
    height: 33px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
  padding-left: 15px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.orange};
  }
`;

export const SearchButton = styled.button`
  width: 62px;
  height: 100%;
  background-color: #fff;

  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};

  ${flex({ jc: "center" })}/* display: flex;
  align-items: center;
  justify-content: center; */
`;
