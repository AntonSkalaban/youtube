import React from "react";
import { VideosList } from "components/VideosList";
import { videoAPI } from "store/api/videoApi";
import { StyledContent } from "./style";
import { Title2 } from "components/UI/styled";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { ShowMoreBtn } from "components/ShowMoreBtn";

export const Content: React.FC = () => {
  const { category, title, pageToken } = useSelector((state: RootState) => state.params);

  const { data, isFetching, isError } = videoAPI.useGetVideosQuery({
    q: category || title,
    pageToken,
  });

  if (isFetching)
    return (
      <StyledContent>
        <Title2>Fetching...</Title2>
      </StyledContent>
    );

  if (isError)
    return (
      <StyledContent>
        <Title2>Error...</Title2>
      </StyledContent>
    );

  if (data && data?.items?.length > 0) {
    console.log(data);
    return (
      <StyledContent>
        <VideosList videos={data.items} />
        <ShowMoreBtn pageToken={data.nextPageToken} />
      </StyledContent>
    );
  }
  return (
    <StyledContent>
      <Title2>Not found(...</Title2>;
    </StyledContent>
  );
};
