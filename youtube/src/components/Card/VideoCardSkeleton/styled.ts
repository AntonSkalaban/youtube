import { styled } from "styled-components";
import { flex, Skeleton } from "components/styled";

export const TextSkeletonContainer = styled.div`
  ${flex({ fd: "column", ai: "flex-start", jc: "start", g: "2px" })}
`;

export const CardAvatarSkeleton = styled(Skeleton)`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  left: 0;
  border-radius: 50%;
`;
