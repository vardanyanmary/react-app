import { createAsyncThunk } from "@reduxjs/toolkit";
import albumsService from "api/Services/AlbumsService/AlbumsService";
import { Album } from "api/Services/AlbumsService/types";
import { AsyncThunkConfig } from "shared/types/asyncThunkConfig";
import { errorHandler } from "shared/utils/errorHandler";

export const fetchAllAlbums = createAsyncThunk<Album[], void, AsyncThunkConfig>(
    'albumSlice/fetchAllAlbums',
    async (_, thunkApi) => {
        try {
            const response = await albumsService.getAllAlbums()
            return response
        } catch (error: any) {
            return errorHandler(error , thunkApi)

                 // return thunkApi.rejectWithValue(error)

        }
    }
)