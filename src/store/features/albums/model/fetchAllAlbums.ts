import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../api/api";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";
import { Album } from "../../../../api/Services/AlbumsService/types";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";

export const fetchAllAlbums = createAsyncThunk<Album[], void, AsyncThunkConfig>(
    'albumSlice/fetchAllAlbums',
    async (_, thunkApi) => {
        try {
            const response = await api.get<Album[]>('albums')
            // if (response.status < 200 || response.status >= 300) {
            //     return thunkApi.rejectWithValue(response.data)
            // }
            return response.data
        } catch (error: any) {
            console.log(error);

            if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
                return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST)
            }
            return []
                 // return thunkApi.rejectWithValue(error)

        }
    }
)