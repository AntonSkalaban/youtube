import styled from "styled-components";
import { flex } from "components/styled";
import Logo from "assets/svg/logo.svg";

export const LogoContainer = styled.div`
  width: 100%;
  height: 21px;

  ${flex({ g: "6px" })}

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
