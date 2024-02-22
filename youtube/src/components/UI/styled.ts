import styled from "styled-components";

export const Title2 = styled.h2`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
`;

export const Text = styled.p<{ size?: number }>`
  font-family: Roboto;
  font-size: ${({ size = 400 }) => size};
  font-weight: 400;
  line-height: 18px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
`;
