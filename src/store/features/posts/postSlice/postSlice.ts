import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../../api/Services/PostsService/types";
import { PostsStateSchema } from "../types/posts";

const initialState: PostsStateSchema = {
  data: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    // our actions , mer actioni tipy stex haskanuma (setLoading , initPosts ...)
    setLoading: (state, action:PayloadAction<boolean>)=>{
        state.isLoading = action.payload
    },
    initPosts: (state, action:PayloadAction<Post[]>)=>{
        state.data = action.payload
    },
    setError: (state, action:PayloadAction<string | undefined>) => {
        state.error = action.payload
    },
    selectPosts: (state, action:PayloadAction<Post>)=>{
        state.selectedData = action.payload
    },
  },
});

export const { 
    reducer: postReducer,
    actions: postActions
} = postSlice;
