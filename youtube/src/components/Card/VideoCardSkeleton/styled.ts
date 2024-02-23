import { Skeleton } from "components/styled/StyledComponents";
import { CardImgContainer } from "components/Card/ViedoCard/styled";
import { styled } from "styled-components";

export const CardImgSkeleton = styled(Skeleton)`
  ${CardImgContainer}
`;

export const TextSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CardAvatarSkeleton = styled(Skeleton)`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  left: 0;
  border-radius: 50%;
`;
