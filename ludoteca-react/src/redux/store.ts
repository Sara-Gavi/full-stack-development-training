import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { ludotecaAPI } from "./services/ludotecaApi";

export const store = configureStore({
  reducer: {
    [ludotecaAPI.reducerPath]: ludotecaAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([ludotecaAPI.middleware]),
});
