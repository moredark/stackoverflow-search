import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { stackApi } from "./stackoverflow/stackoverflow.api";

export const store = configureStore({
  reducer: {
    [stackApi.reducerPath]: stackApi.reducer,
  },
  middleware: getDefaultMiddleware().concat(stackApi.middleware),
});
