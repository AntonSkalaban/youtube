import React, { useState } from "react";
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
import { Player } from "components/Player";
import { Modal } from "components/Modal";

interface VideoCardProps {
  snippet: VideoSnippet;
  videoId: string;
}
export const VideoCard: React.FC<VideoCardProps> = ({ snippet, videoId }) => {
  const { title, thumbnails, channelTitle, publishTime } = snippet;

  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const toggleModal = () => setIsPlayerOpen((prev) => !prev);

  return (
    <>
      <StyledCard onClick={toggleModal}>
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

      {isPlayerOpen && (
        <Modal toggle={toggleModal}>
          <Player videoId={videoId} />
        </Modal>
      )}
    </>
  );
};
