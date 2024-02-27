export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Video {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: VideoSnippet;
}

export interface ApiResponse {
  kind: string;
  nextPageToken: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
}

export interface VideoData {
  nextPageToken: string;
  items: Video[];
}
