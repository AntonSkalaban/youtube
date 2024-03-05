import { flex } from "components/styled/Mixin";
import { ThemeEnum } from "components/styled/Theme";
import { styled } from "styled-components";

export const BurgerIconContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: end;

  @media ${({ theme }) => theme.media.small} {
    ${flex({ jc: "flex-end" })}
  }
`;

export const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  z-index: 400;

  span {
    background: ${({ theme }) =>
      theme.type === ThemeEnum.dark ? theme.colors.orange : theme.colors.black};
    height: 2px;
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.3s ease;
    border-radius: 10px;
  }

  & span:first-child {
    top: ${({ $isOpen }) => ($isOpen ? "6px" : "0px")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg);" : "rotate(0);")};
  }

  & span:nth-child(2) {
    top: ${({ $isOpen }) => ($isOpen ? "6px" : "6px")};
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  & span:last-child {
    top: ${({ $isOpen }) => ($isOpen ? "6px" : "12px")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg);" : "rotate(0);")};
  }

  & span:first-child,
  & span:last-child {
    background-color: ${({ $isOpen, theme }) =>
      $isOpen
        ? "rgba(255, 0, 0, 1)"
        : theme.type === ThemeEnum.dark
          ? theme.colors.orange
          : theme.colors.black};
  }
`;

export const BurgerMenuContent = styled.div<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? "80%" : "0")};
  height: 100vh;

  ${flex({ ai: "normal" })}

  background: ${({ theme }) => theme.colors.bg};

  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100vw)")};

  z-index: 399;

  padding: 15px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
`;
