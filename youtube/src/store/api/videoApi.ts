import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url, headers } from "const/apiData";
import { ApiResponse, Video, VideoData } from "types";

export const videoAPI = createApi({
  reducerPath: "videoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (build) => ({
    getVideos: build.query<VideoData, { q: string; pageToken?: string }>({
      query: ({ q, pageToken = "" }) => {
        const maxResults = 16;
        return {
          url: `/search`,
          headers,
          params: {
            q,
            part: "snippet",
            regionCode: "US",
            maxResults,
            pageToken,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: ApiResponse) => {
        return {
          nextPageToken: response.nextPageToken,
          items: response.items,
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.nextPageToken !== newItems.nextPageToken) {
          currentCache.items.push(...newItems.items);
          currentCache.nextPageToken = newItems.nextPageToken;
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getVideosTitles: build.query<Video[], string>({
      query: (title) => {
        const maxResults = 40;
        return {
          url: `/search`,
          headers,
          params: {
            q: title,
            part: "snippet",
            regionCode: "US",
            maxResults,
          },
        };
      },
      transformResponse: (response: ApiResponse) => response.items,
    }),
  }),
});
