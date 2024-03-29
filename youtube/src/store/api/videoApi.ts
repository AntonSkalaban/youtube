import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Video, VideoData } from "types";

const headers = {
  "X-RapidAPI-Key": process.env.API_KEY,
  "X-RapidAPI-Host": process.env.API_HOST,
};

export const videoAPI = createApi({
  reducerPath: "videoAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
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
