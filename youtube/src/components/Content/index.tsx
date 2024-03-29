import { useSelector } from "react-redux";
import { CardsContainer } from "components/CardsContainer";
import { ShowMoreBtn } from "components/ShowMoreBtn";
import { Title2 } from "components/styled/StyledComponents";
import { videoAPI } from "store/api/videoApi";
import { getSearchParams } from "store/slice";
import { ContentContainer } from "./styled";

export const Content: React.FC = () => {
  const { category, title, pageToken } = useSelector(getSearchParams);

  const { data, isFetching, isError } = videoAPI.useGetVideosQuery({
    q: category || title,
    pageToken,
  });

  if (isError)
    return (
      <ContentContainer>
        <Title2>Error...</Title2>
      </ContentContainer>
    );

  if (isFetching && !pageToken)
    return (
      <ContentContainer>
        <CardsContainer isFetching />
      </ContentContainer>
    );

  if (!isFetching && !data?.items?.length)
    return (
      <ContentContainer>
        <Title2>Not found...</Title2>
      </ContentContainer>
    );

  return (
    <ContentContainer>
      {data && data?.items?.length > 0 && (
        <>
          <CardsContainer videos={data.items} isFetching={isFetching} />
          {!isFetching && <ShowMoreBtn pageToken={data.nextPageToken} />}
        </>
      )}
    </ContentContainer>
  );
};
