import { styled } from "styled-components";
import { Text, flex, textOverflow } from "components/styled";

export const SearchSuggestionsContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg};

  position: absolute;
  top: 38px;
  z-index: 2;
`;

export const SearchSuggestionsLi = styled.li`
  height: 28px;

  ${flex({})}

  cursor: pointer;
  padding: 0 15px 0 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tab.default.bg};
  }
`;

export const SearchSuggestionsText = styled(Text)`
  width: 100%;
  font-size: 16px;
  line-height: 28px;

  ${textOverflow}
`;
