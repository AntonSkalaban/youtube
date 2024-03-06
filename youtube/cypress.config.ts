import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
  env: {
    API_URL: "https://youtube-v31.p.rapidapi.com",
    API_KEY: "7b8907e6a0mshb70b72cf1bc429ep16e8cdjsn3bff73939070",
    API_HOST: "youtube-v31.p.rapidapi.com",
  },
});
