import { SkeletonList } from "components/CardsList/SleketonList";
import { VidoList } from "components/CardsList/VideosList";
import { Video } from "types/api";
import { StyledCardsContainer } from "./styled";

interface CardsContainerProps {
  videos?: Video[];
  isFetching?: boolean;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({ videos, isFetching }) => {
  return (
    <StyledCardsContainer>
      {videos && <VidoList videos={videos} />}
      {isFetching && <SkeletonList />}
    </StyledCardsContainer>
  );
};
