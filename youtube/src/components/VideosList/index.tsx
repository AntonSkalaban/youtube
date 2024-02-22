import React from "react";
import { Video } from "const/types";
import { VideoCard } from "components/ViedoCard";
import { StyledContainer } from "./styled";

interface VideosListProps {
  videos: Video[];
}
export const VideosList: React.FC<VideosListProps> = ({ videos }) => {
  return (
    <StyledContainer>
      {videos.map((video, index) => {
        return <VideoCard video={video} key={video.id.videoId + index} />;
      })}
    </StyledContainer>
  );
};
