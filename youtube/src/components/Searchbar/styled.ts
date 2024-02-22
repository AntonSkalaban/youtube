import styled from "styled-components";

export const SearchInput = styled.input`
  width: 570px;
  height: 100%;
  border: ${({ theme }) => theme.borders.grey};
`;

export const SearchButton = styled.button`
  width: 57px;
  height: 100%;
  background-color: #fff;
  border: ${({ theme }) => theme.borders.grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchBar = styled.div`
  width: 627px;
  height: 38px;
  display: flex;
`;
