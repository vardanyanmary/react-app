import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommentsStateSchema } from "../types/comments";
import { Comment } from "../../../../api/Services/CommentsService/type";
import { fetchAllComments } from "../model/fetchAllComments";
import { ErrorMessage } from "../../../../constants/errorMassages";

const initialState: CommentsStateSchema = {
  data: [],
  isLoading: false,
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initComments: (state, action: PayloadAction<Comment[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorMessage | undefined>) => {
      state.error = action.payload;
    },
    selectComment: (state, action: PayloadAction<Comment>) => {
      state.selectComment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllComments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllComments.rejected, (state, action) => {
        // if(action.error.code) {
        //     state.error = action.error.code;
        // }else {
        //     state.error = ErrorMessage.NOT_FOUND
        // }
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
  },
});

export const { reducer: commentReducer, actions: commentAction } = commentSlice;
