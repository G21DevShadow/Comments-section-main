import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slice/commentSlice";
import type { Middleware } from "@reduxjs/toolkit";

const LocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  window.localStorage.setItem("comment", JSON.stringify(store.getState()));
};
export const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LocalStorageMiddleware),
});

export type rootState = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;
