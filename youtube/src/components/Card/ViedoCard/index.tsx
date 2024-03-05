import { useState } from "react";
import { Modal } from "components/Modal";
import { Player } from "components/Player";
import { VideoSnippet } from "types/api";
import AvatarImg from "assets/png/avatar.png";
import {
  CardAvatarContainer,
  CardContainer,
  CardDescription,
  CardImg,
  CardImgContainer,
  CardText,
  CardTitle,
} from "./styled";

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
      <CardContainer onClick={toggleModal} data-testid="video-card">
        <CardImgContainer>
          <CardImg src={thumbnails.high.url} />
        </CardImgContainer>

        <CardDescription>
          <CardAvatarContainer>
            <CardImg src={AvatarImg} alt="video-img" />
          </CardAvatarContainer>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardText>
              {channelTitle} &#x2022; {new Date(publishTime).getFullYear()}
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
