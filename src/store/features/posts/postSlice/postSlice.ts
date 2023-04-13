import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../../api/Services/PostsService/types";
import { PostsStateSchema } from "../types/posts";
import { fetchAllPosts } from "../model/fetchAllPosts";
import { ErrorMessage } from "../../../../constants/errorMassages";

const initialState: PostsStateSchema = {
  data: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    // our actions , mer actioni tipy stex haskanuma (setLoading , initPosts ...)
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initPosts: (state, action: PayloadAction<Post[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorMessage | undefined>) => {
      state.error = action.payload;
    },
    selectPosts: (state, action: PayloadAction<Post>) => {
      state.selectedData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // addCase<ActionCreator, function (te inch petqa ani et yntacqum )> ActionCreator - stex darnuma fetchAllPosts

      .addCase(fetchAllPosts.pending, (state) => {
        // Loading
        state.isLoading = true;
      }) // pendingi jamanak mez petq chi action unenanq , mez staten ela heriq

      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        // ashxatela
        state.data = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchAllPosts.rejected, (state, action) => {
        // rejecta exel
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
  },
});

export const { reducer: postReducer, actions: postActions } = postSlice;
