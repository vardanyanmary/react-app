import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommentsStateSchema } from "../types/comments";
import { Comment } from "../../../../api/Services/CommentsService/type";

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
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
    selectedComment: (state, action: PayloadAction<Comment>) => {
      state.selectedData = action.payload;
    },
  },
});

export const { 
    reducer: commentReducer, 
    actions: commentAction 
} = commentSlice;
