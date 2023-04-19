import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { api } from "../../../../api/api";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";
import { Comment } from "../../../../api/Services/CommentsService/type";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";
import { errorHandler } from "../../../../shared/utils/errorHandler";
import commentsService from "../../../../api/Services/CommentsService/CommentsService";

export const fetchAllComments = createAsyncThunk<Comment[], void, AsyncThunkConfig>(
    'commentSlice/fetchAllComments',
    async (_, thunkApi) => {
        try {
            const response = await commentsService.getAllComments()
            return response
        } catch (error: any) {
            return errorHandler(error , thunkApi)
        }
    }
)