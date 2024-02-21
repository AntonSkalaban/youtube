import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url, apiKey } from "const/url";
import { Movie, MovieResponce } from "const/types";

interface MoviesData {
  movies: Movie[];
  page: number;
}

interface SearchParams {
  page?: number;
  title?: string;
}

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (build) => ({
    getMoviesBySearch: build.query<MoviesData, SearchParams>({
      query: ({ title = "", page = 1 }) => {
        const itemsPerPage = 16;
        return {
          url: `/search`,
          headers: { ["X-API-KEY"]: apiKey },
          params: {
            query: title,
            page,
            limit: itemsPerPage,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: MovieResponce, _meta, arg) => {
        return {
          movies: response.docs,
          page: arg.page ?? 1,
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.page < newItems.page) {
          currentCache.movies.push(...newItems.movies);
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});
