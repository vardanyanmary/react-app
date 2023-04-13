import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../../api/Services/PostsService/types";
import { RootState } from "../../..";
import { api } from "../../../../api/api";
import { ErrorMessage } from "../../../../constants/errorMassages";

export const fetchAllPosts = createAsyncThunk<Post[], void, { state: RootState, rejectValue: ErrorMessage }>(
    'postSlice/fetchAllPosts',
    async (_, thunkApi) => {
        try {
            const response = await api.get<Post[]>('posts')
            // if (response.status < 200 || response.status >= 300) {
            //     return thunkApi.rejectWithValue(response.data) // hashvi vor chi ashxatel
            // } // mnacac bolor depqerum responsi datan returna anum 
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
