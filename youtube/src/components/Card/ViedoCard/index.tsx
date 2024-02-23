import React from "react";
import { VideoSnippet } from "const/types";
import {
  CardText,
  CardTitle,
  StyledAvatar,
  StyledCard,
  StyledCardDescription,
  StyledCardImgContainer,
} from "./styled";
import Avatar from "assets/png/avatar.png";

interface VideoCardProps {
  snippet: VideoSnippet;
}
export const VideoCard: React.FC<VideoCardProps> = ({ snippet }) => {
  const { title, thumbnails, channelTitle, publishTime } = snippet;
  return (
    <StyledCard>
      <StyledCardImgContainer>
        <img src={thumbnails.medium.url} style={{ width: "100%", height: "100%" }} />
      </StyledCardImgContainer>

      <StyledCardDescription>
        <StyledAvatar src={Avatar} />
        <div>
          <CardTitle>{title}</CardTitle>
          <CardText>
            {channelTitle} &#x2022; {new Date(publishTime).toLocaleDateString()}
          </CardText>
        </div>
      </StyledCardDescription>
    </StyledCard>
  );
};
