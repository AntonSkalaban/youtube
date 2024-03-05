import {
  CardAvatarContainer,
  CardContainer,
  CardDescription,
  CardImgContainer,
} from "components/Card/ViedoCard/styled";
import { Skeleton, SkeletonBlock, Text, Title2 } from "components/styled/StyledComponents";
import { TextSkeletonContainer } from "./styled";

export const VideoCardSkeleton: React.FC = () => {
  return (
    <CardContainer data-testid="skeleton-card">
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
