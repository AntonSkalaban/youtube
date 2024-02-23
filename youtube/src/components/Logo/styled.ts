import styled from "styled-components";
import Logo from "assets/svg/logo.svg";

export const LogoContainer = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

export const LogoIcon = styled(Logo)`
  width: 29px;
  height: 100%;
`;
