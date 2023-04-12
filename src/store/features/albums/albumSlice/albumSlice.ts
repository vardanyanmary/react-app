import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlbumsStateSchema } from "../types/albums";
import { Album } from "../../../../api/Services/AlbumsService/types";

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
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
    selectAlbum: (state, action: PayloadAction<Album>) => {
        state.selectAlbum = action.payload
    },
  },
});

export const {
    reducer: albumReducer,
    actions : albumAction
} = albumSlice