import { VideoCardSkeleton } from "components/Card/VideoCardSkeleton";

export const SkeletonList: React.FC = () => {
  return (
    <>
      {Array.from({ length: 16 }, (_, i) => (
        <VideoCardSkeleton key={i} />
      ))}
    </>
  );
};
