import { createAsyncThunk } from "@reduxjs/toolkit";
import { Album } from "../../../../api/Services/AlbumsService/types";
import albumsService from "../../../../api/Services/AlbumsService/AlbumsService";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";
import { errorHandler } from "../../../../shared/utils/errorHandler";

export const fetchAlbumById = createAsyncThunk< Album | null, number, AsyncThunkConfig>( 
    "albumSlice/fetchAlbumById", 
        async (albumId, thunkApi) => {
        try {
            const response = await albumsService.getAlbumById(albumId);
            return response;
        } catch (error: any) {
            return errorHandler(error , thunkApi)

            // return thunkApi.rejectWithValue(error)
        }
});
