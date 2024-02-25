import React from "react";
import { createPortal } from "react-dom";
import {
  CloseModalBtn,
  ModalContainer,
  ModalContent,
  // ModalOverlay,
  ModalCloseIcon,
} from "./styled";
import { Overlay } from "components/styled";

interface ModalProps {
  children: React.ReactNode;
  toggle: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, toggle }) => {
  return (
    <>
      {createPortal(
        <>
          <Overlay />
          {/* <ModalOverlay> */}
          <ModalContainer>
            <CloseModalBtn onClick={toggle}>
              <ModalCloseIcon />
            </CloseModalBtn>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
          {/* </ModalOverlay> */}
        </>,
        document.body
      )}
    </>
  );
};
