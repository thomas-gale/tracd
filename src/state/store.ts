import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./map/mapslice";
import tracdReducer from "./tracd/tracdslice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
    tracd: tracdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
