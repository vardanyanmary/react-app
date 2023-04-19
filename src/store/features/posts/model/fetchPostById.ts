import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "api/Services/PostsService/types";
import postsService from "api/Services/PostsService/PostsService";
import { AsyncThunkConfig } from "shared/types/asyncThunkConfig";
import { errorHandler } from "shared/utils/errorHandler";
 
export const fetchPostById = createAsyncThunk<Post | null, number, AsyncThunkConfig>(
    'postSlice/fetchPostById',
    async (postId, thunkApi) => {
        try {
            // thunkApi.getState() vor stex get aneluc haskana vor mer store-y konkret et typen uni 
            const response = await postsService.getPostById(postId)
            return response.data
        } catch (error: any) {
            return errorHandler(error,thunkApi)
        }
    }
)