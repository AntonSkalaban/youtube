import React from "react";
import {
  StyledAvatar,
  StyledCard,
  StyledCardDescription,
  StyledCardImgContainer,
  StyledCardTextContainer,
} from "./styled";
import { Video } from "const/types";
import { Text, Title2 } from "components/UI/styled";
import Avatar from "assets/png/avatar.png";

interface VideoCardProps {
  video: Video;
}
export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <StyledCard>
      <StyledCardImgContainer>
        <img src={video.snippet.thumbnails.medium.url} style={{ width: "100%", height: "100%" }} />
      </StyledCardImgContainer>

      <StyledCardDescription>
        <StyledAvatar src={Avatar} />
        <StyledCardTextContainer>
          <Title2 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {video.snippet.title}
          </Title2>
          <Text>
            {video.snippet.channelTitle} &#x2022;{" "}
            {new Date(video.snippet.publishTime).toLocaleDateString()}
          </Text>
        </StyledCardTextContainer>
      </StyledCardDescription>
    </StyledCard>
  );
};
