import React from "react";
import { Video } from "const/types";
import { VideoCard } from "components/Card/ViedoCard";

interface VideosListProps {
  videos: Video[];
}

export const VidoList: React.FC<VideosListProps> = ({ videos }) => {
  return (
    <>
      {videos.map(({ id, snippet }, index) => {
        return <VideoCard snippet={snippet} key={`${id.videoId}-${index}`} />;
      })}
    </>
  );
};
