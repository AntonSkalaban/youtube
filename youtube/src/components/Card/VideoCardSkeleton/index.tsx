import React from "react";
import { TextSkeletonContainer } from "./styled";
import {
  StyledAvatar,
  StyledCard,
  StyledCardDescription,
  StyledCardImgContainer,
} from "components/Card/ViedoCard/styled";
import { Skeleton, Title2, Text, SkeletonBlock } from "components/UI/styled";

export const VideoCardSkeleton: React.FC = () => {
  return (
    <StyledCard>
      <StyledCardImgContainer as={Skeleton} />
      <StyledCardDescription>
        <StyledAvatar as={Skeleton} />
        <TextSkeletonContainer>
          <Title2 as={Skeleton} />
          <Text as={Skeleton} />
          <SkeletonBlock width={"70%"} height={"18px"} />
          <SkeletonBlock width={"90%"} height={"18px"} />
        </TextSkeletonContainer>
      </StyledCardDescription>
    </StyledCard>
  );
};
