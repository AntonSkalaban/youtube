import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
  env: {
    API_URL: "https://youtube-v31.p.rapidapi.com",
    API_KEY: "f5fd808440msh947ac55251198e0p1f2729jsn74b8bc147027",
    API_HOST: "youtube-v31.p.rapidapi.com",
  },
});
