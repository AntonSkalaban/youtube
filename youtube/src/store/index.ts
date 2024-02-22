import { configureStore } from "@reduxjs/toolkit";
import { videoAPI } from "./api/videoApi";
import ParamsSlice from "./slice/ParamsSlice";

export const store = configureStore({
  reducer: {
    params: ParamsSlice,
    [videoAPI.reducerPath]: videoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(videoAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
