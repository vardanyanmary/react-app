import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "api/Services/CommentsService/type";
import commentsService from "api/Services/CommentsService/CommentsService";
import { AsyncThunkConfig } from "shared/types/asyncThunkConfig";
import { errorHandler } from "shared/utils/errorHandler";

export const fetchCommentById = createAsyncThunk< Comment | null, number, AsyncThunkConfig>(
   "commentSlice/fetchCommentById", async (commentId, thunkApi) => {
  try {
    const response = await commentsService.getCommentById(commentId);
    return response;
  } catch (error: any) {
    return errorHandler(error , thunkApi)

  }
});
