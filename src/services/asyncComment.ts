import { createAsyncThunk } from "@reduxjs/toolkit";
import { type Comment } from "../store/slice/types/types";

// services/comments.ts
export const fetchComments = createAsyncThunk<Comment[]>(
  "comment/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("./data/data.json");
      if (!res.ok) throw new Error("Error en la obtención de datos");

      const data = await res.json();
      return data.comments;
    } catch (err) {
      // Aquí propagamos el error para manejarlo en extraReducers
      return rejectWithValue((err as Error).message);
    }
  }
);
