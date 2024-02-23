import React from "react";
import { TextSkeletonContainer } from "./styled";
import { Skeleton, Title2, Text, SkeletonBlock } from "components/styled/StyledComponents";
import {
  CardAvatarContainer,
  CardContainer,
  CardDescription,
  CardImgContainer,
} from "components/Card/ViedoCard/styled";

export const VideoCardSkeleton: React.FC = () => {
  return (
    <CardContainer>
      <CardImgContainer as={Skeleton} />
      <CardDescription>
        <CardAvatarContainer as={Skeleton} />
        <TextSkeletonContainer>
          <Title2 as={Skeleton} />
          <Text as={Skeleton} />
          <SkeletonBlock width={"70%"} height={"18px"} />
          <SkeletonBlock width={"90%"} height={"18px"} />
        </TextSkeletonContainer>
      </CardDescription>
    </CardContainer>
  );
};
