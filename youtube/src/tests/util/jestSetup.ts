import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
export const handlers = [
  http.get("https://youtube-v31.p.rapidapi.com/search", async () => {
    await delay(150);
    return HttpResponse.json({
      nextPageToken: "testToken",
      items: [
        {
          kind: "testVideo",
          id: { kind: "youtube#video", videoId: "suvMs2RhKPg" },
          snippet: {
            publishedAt: "2020-12-14T13:53:32Z",
            channelId: "UCuV_boba7GALMAKp8MUoZWA",
            title: "Tempur-Pedic® Mattress Selection at Mancini&#39;s Sleepworld",
            description:
              "Save up to $500 on Tempur-Pedic® adjustable mattress sets during Mancini's Sleepworld's Presidents' Day sale! We're open for ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/suvMs2RhKPg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/suvMs2RhKPg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/suvMs2RhKPg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Mancini's Sleepworld",
            liveBroadcastContent: "none",
            publishTime: "2020-12-14T13:53:32Z",
          },
        },
      ],
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());
