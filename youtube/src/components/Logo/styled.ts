import styled from "styled-components";
import Logo from "assets/svg/logo.svg";

export const LogoContainer = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  @media ${({ theme }) => theme.media.medium} {
    grid-area: 1 / 1 / 2 / 2;
  }
  @media ${({ theme }) => theme.media.extasmall} {
    gap: 0;
  }
`;

export const LogoIcon = styled(Logo)`
  width: 29px;
  height: 100%;
`;
