import { styled } from "styled-components";
import { Text } from "components/styled/index";
export const SearchTipsContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bg};

  position: absolute;
  top: 38px;
  z-index: 2;
`;

export const SearchTipsLi = styled.li`
  height: 28px;

  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 0 15px 0 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tab.default.bg};
  }
`;

export const SearchTipsText = styled(Text)`
  width: 100%;
  font-size: 16px;
  line-height: 28px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
