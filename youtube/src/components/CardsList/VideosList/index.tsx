import { VideoCard } from "components/Card/ViedoCard";
import { Video } from "types/api";

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
