import React from "react";
import { VidoList } from "components/CardsList/VideosList";
import { SkeletonList } from "components/CardsList/SleketonList";
import { StyledCardsContainer } from "./styled";
import { Video } from "const/types";

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
