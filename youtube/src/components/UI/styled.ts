import styled from "styled-components";
import { keyframes } from "styled-components";

export const Title1 = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`;

export const Title2 = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
`;

export const Text = styled.p<{ size?: number }>`
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

const loadingAnimation = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }`;

export const Skeleton = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  animation: ${loadingAnimation} 3s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
`;

export const SkeletonBlock = styled(Skeleton)<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100%"};
`;
