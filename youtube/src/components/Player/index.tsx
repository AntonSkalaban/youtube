import { PlayerContainer } from "./styled";

interface PlayerProps {
  videoId: string;
}

export const Player: React.FC<PlayerProps> = ({ videoId }) => {
  return (
    <PlayerContainer
      title="YouTube video player"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&rel=0`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
