import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
//Types
import type { ReplyComment, Comment, id } from "./types/types";
//Fetching data
import { fetchComments } from "../../services/asyncComment";
//Utils functions
import {
  ManipulateScore,
  AddReply,
  UpdateComm,
  DeleteComm,
} from "./utils/function";
//Utils Storage
import {
  fallBackComment,
  loadStorage,
  savedStorage,
  nextId,
} from "./utils/storage";

interface CommentsState {
  items: Comment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: CommentsState = {
  items: loadStorage(),
  status: "idle",
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    increaseScore: (state, action: PayloadAction<id>) => {
      const result = ManipulateScore(state.items, action.payload, action.type);
      state.items = result;
      savedStorage(result);
    },
    decreaseScore: (state, action: PayloadAction<id>) => {
      const result = ManipulateScore(state.items, action.payload, action.type);
      state.items = result;
      savedStorage(result);
    },
    addNewComment: (state, action: PayloadAction<Comment>) => {
      const id = nextId(state.items);
      const newComment = { ...action.payload, id: id };
      state.items.push(newComment);
      savedStorage(state.items);
    },
    replyComment: (state, action: PayloadAction<ReplyComment>) => {
      const { id, reply } = action.payload;
      const next = nextId(state.items);

      const result = AddReply(id, reply, next, state.items);
      state.items = result;
      savedStorage(result);
    },
    updateComment: (state, action: PayloadAction<{ id: id; text: string }>) => {
      const { id, text } = action.payload;
      const result = UpdateComm(id, text, state.items);
      state.items = result;
      savedStorage(result);
    },
    deleteComment: (state, action: PayloadAction<id>) => {
      const result = DeleteComm(action.payload, state.items);
      state.items = result;
      savedStorage(result);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.status = "succeeded";

          const fetchComm = loadStorage();

          if (fetchComm.length === 0) {
            state.items = action.payload ? action.payload : fallBackComment;
            savedStorage(state.items);
          }
        }
      )
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
        // Si falla la petición, garantizamos al menos el fallback
        state.items = fallBackComment;

        savedStorage(state.items);
      });
  },
});

export default commentSlice.reducer;
export const {
  increaseScore,
  decreaseScore,
  addNewComment,
  replyComment,
  updateComment,
  deleteComment,
} = commentSlice.actions;
