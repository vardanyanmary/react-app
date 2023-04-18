import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../../api/Services/PostsService/types";
import postsService from "../../../../api/Services/PostsService/PostsService";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { RootState } from "../../..";

export const fetchPostById = createAsyncThunk<Post | null, number, { state: RootState, rejectValue: ErrorMessage }>(
    'postSlice/fetchPostById',
    async (postId, thunkApi) => {
        try {
            const response = await postsService.getPostById(postId)
            return response.data
        } catch (error: any) {
            console.log(error);

            if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
                return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST)
            }
            return null 
        }
    }
)