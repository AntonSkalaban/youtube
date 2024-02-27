import React from "react";
import { Video } from "types/api";
import { VideoCard } from "components/Card/ViedoCard";

interface VideosListProps {
  videos: Video[];
}

export const VidoList: React.FC<VideosListProps> = ({ videos }) => {
  return (
    <>
      {videos.map(({ id: { videoId }, snippet }, index) => {
        return <VideoCard snippet={snippet} videoId={videoId} key={`${videoId}-${index}`} />;
      })}
    </>
  );
};
