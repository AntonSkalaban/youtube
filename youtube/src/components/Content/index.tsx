import React from "react";
import { videoAPI } from "store/api/videoApi";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { ShowMoreBtn } from "components/ShowMoreBtn";
import { CardsContainer } from "components/CardsContainer";
import { Title2 } from "components/UI/styled";
import { StyledContent } from "./styled";

export const Content: React.FC = () => {
  const { category, title, pageToken } = useSelector((state: RootState) => state.params);

  const { data, isFetching, isError } = videoAPI.useGetVideosQuery({
    q: category || title,
    pageToken,
  });

  if (isFetching && !pageToken)
    return (
      <StyledContent>
        <CardsContainer isFetching />
      </StyledContent>
    );

  if (!isFetching && !data?.items?.length)
    return (
      <StyledContent>
        <Title2>Not found(...</Title2>;
      </StyledContent>
    );

  if (isError)
    return (
      <StyledContent>
        <Title2>Error...</Title2>
      </StyledContent>
    );

  return (
    <StyledContent>
      {data && data?.items?.length > 0 && (
        <>
          <CardsContainer videos={data.items} isFetching={isFetching} />
          {!isFetching && <ShowMoreBtn pageToken={data.nextPageToken} />}
        </>
      )}
    </StyledContent>
  );
};
