import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { api } from "../../../../api/api";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { Album } from "../../../../api/Services/AlbumsService/types";

export const fetchAllAlbums = createAsyncThunk<Album[], void, { state: RootState, rejectValue: ErrorMessage }>(
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