import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { Album } from "../../../../api/Services/AlbumsService/types";
import albumsService from "../../../../api/Services/AlbumsService/AlbumsService";

export const fetchAlbumById = createAsyncThunk< Album | null, number, { state: RootState; rejectValue: ErrorMessage }>( 
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
