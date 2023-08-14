import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carApi } from "../services/carApi";
import { carImageApi } from "../services/carImageApi";

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});

setupListeners(store.dispatch);

//export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
