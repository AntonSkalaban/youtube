import React from "react";
import { Video } from "types/api";
import { VidoList } from "components/CardsList/VideosList";
import { SkeletonList } from "components/CardsList/SleketonList";
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
