import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "./api/MovieApi";

export const store = configureStore({
  reducer: {
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(movieAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
