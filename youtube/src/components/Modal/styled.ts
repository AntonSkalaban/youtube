import { styled } from "styled-components";
import { Button } from "components/styled/StyledComponents";
import CloseIcon from "assets/svg/close.svg";

export const ModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.section`
  width: 600px;
  height: 400px;
  position: relative;
  padding-top: 25px;
  background-color: ${({ theme }) => theme.colors.border};

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 500;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  @media ${({ theme }) => theme.media.small} {
    width: 100%;
  }
  @media ${({ theme }) => theme.media.extasmall} {
    height: 230px;
  }
`;

export const CloseModalBtn = styled(Button)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalCloseIcon = styled(CloseIcon)`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.colors.font};
`;
