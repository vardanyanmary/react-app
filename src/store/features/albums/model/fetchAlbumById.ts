import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";
import { Album } from "../../../../api/Services/AlbumsService/types";
import albumsService from "../../../../api/Services/AlbumsService/AlbumsService";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";

export const fetchAlbumById = createAsyncThunk< Album | null, number, AsyncThunkConfig>( 
    "albumSlice/fetchAlbumById", 
        async (albumId, thunkApi) => {
        try {
            const response = await albumsService.getAlbumById(albumId);
            // if (response.status < 200 || response.status >= 300) {
            //     return thunkApi.rejectWithValue(response.data)
            // }
            return response;
        } catch (error: any) {
            console.log(error);

            if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
            return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST);
            }
            return null;
            // return thunkApi.rejectWithValue(error)
        }
});
