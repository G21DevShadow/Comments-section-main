import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slice/commentSlice";
export const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;
