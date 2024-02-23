import React, { useState } from "react";
import { VideoSnippet } from "types/api";
import { Player } from "components/Player";
import { Modal } from "components/Modal";
import {
  CardText,
  CardTitle,
  CardDescription,
  CardImgContainer,
  CardContainer,
  CardImg,
  CardAvatarContainer,
} from "./styled";
import AvatarImg from "assets/png/avatar.png";

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
      <CardContainer onClick={toggleModal}>
        <CardImgContainer>
          <CardImg src={thumbnails.medium.url} />
        </CardImgContainer>

        <CardDescription>
          <CardAvatarContainer>
            <CardImg src={AvatarImg} />
          </CardAvatarContainer>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardText>
              {channelTitle} &#x2022; {new Date(publishTime).toLocaleDateString()}
            </CardText>
          </div>
        </CardDescription>
      </CardContainer>

      {isPlayerOpen && (
        <Modal toggle={toggleModal}>
          <Player videoId={videoId} />
        </Modal>
      )}
    </>
  );
};
