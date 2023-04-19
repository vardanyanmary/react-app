import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../api/api";
import { Album } from "../../../../api/Services/AlbumsService/types";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";
import { errorHandler } from "../../../../shared/utils/errorHandler";
import albumsService from "../../../../api/Services/AlbumsService/AlbumsService";

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