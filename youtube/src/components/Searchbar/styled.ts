import styled from "styled-components";

export const SearchInput = styled.input`
  width: 570px;
  height: 100%;
  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};
  padding-left: 15px;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.orange};
  }
`;

export const SearchButton = styled.button`
  width: 57px;
  height: 100%;
  background-color: #fff;

  border: ${({ theme }) => theme.borders.thin};
  border-color: ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchBar = styled.div`
  width: 627px;
  height: 38px;
  display: flex;
`;
