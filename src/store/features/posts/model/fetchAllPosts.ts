import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../../api/Services/PostsService/types";
import { api } from "../../../../api/api";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";
import { errorHandler } from "../../../../shared/utils/errorHandler";

export const fetchAllPosts = createAsyncThunk<Post[], void, AsyncThunkConfig >(
    'postSlice/fetchAllPosts',
    async (_, thunkApi) => {
        try {
            const response = await api.get<Post[]>('posts')
            // if (response.status < 200 || response.status >= 300) {
            //     return thunkApi.rejectWithValue(response.data) // hashvi vor chi ashxatel
            // } // mnacac bolor depqerum responsi datan returna anum 
            return response.data
        } catch (error: any) {
            return errorHandler(error , thunkApi)
        }
    }
)
