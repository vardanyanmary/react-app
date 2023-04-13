import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlbumsStateSchema } from "../types/albums";
import { Album } from "../../../../api/Services/AlbumsService/types";
import { fetchAllAlbums } from "../model/fetchAllAlbums";
import { ErrorMessage } from "../../../../constants/errorMassages";

const initialState: AlbumsStateSchema = {
  data: [],
  isLoading: false,
};

const albumSlice = createSlice({
  name: "albumSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initAlbums: (state, action: PayloadAction<Album[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorMessage | undefined>) => {
      state.error = action.payload;
    },
    selectAlbum: (state, action: PayloadAction<Album>) => {
      state.selectAlbum = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAlbums.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAlbums.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllAlbums.rejected, (state, action) => {
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

export const { reducer: albumReducer, actions: albumAction } = albumSlice;