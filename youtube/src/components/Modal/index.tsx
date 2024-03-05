import { createPortal } from "react-dom";
import { Overlay } from "components/styled";
import { CloseModalBtn, ModalCloseIcon, ModalContainer, ModalContent } from "./styled";

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
          <ModalContainer>
            <CloseModalBtn onClick={toggle}>
              <ModalCloseIcon />
            </CloseModalBtn>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </>,
        document.body
      )}
    </>
  );
};
