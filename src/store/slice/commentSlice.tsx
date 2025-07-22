import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
//Types
import type { ReplyComment, Comment, id } from "./types/types";
//Fetching data
import { fetchComments } from "../../services/asyncComment";
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
      //Nota para mas adelantes estas funciones
      const Increase = (comment: Comment[]) => {
        //deben ser puras.
        for (let i = 0; i < comment.length; i++) {
          //Esta función la puedo mejorar que reciba un objeto
          if (comment[i].id === action.payload) {
            //con arreglo y el tipo de acción ya sea del score,reply
            comment[i].score += 1;
            return;
          } else if (comment[i].replies.length) {
            Increase(comment[i].replies);
          }
        }
      };
      Increase(state.items);
      savedStorage(state.items);
    },
    addNewComment: (state, action: PayloadAction<Comment>) => {
      const id = nextId(state.items);
      const newComment = { ...action.payload, id: id };
      state.items.push(newComment);
      savedStorage(state.items);
    },
    replyComment: (state, action: PayloadAction<ReplyComment>) => {
      //esta copia la debo quitar, solo esta para probar el funcionamiento
      const { id, reply } = action.payload;
      const next = nextId(state.items);

      const addReply = (comment: Comment[]) => {
        for (let i = 0; i < comment.length; i++) {
          if (comment[i].id === id) {
            comment[i].replies.push({
              ...reply,
              id: next,
              replyingTo: comment[i].user.username,
            });
            return;
          } else if (comment[i].replies.length) {
            addReply(comment[i].replies);
          }
        }
      };
      addReply(state.items);
      savedStorage(state.items);
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
export const { increaseScore, addNewComment, replyComment } =
  commentSlice.actions;
