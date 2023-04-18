import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { api } from "../../../../api/api";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";
import { Comment } from "../../../../api/Services/CommentsService/type";
import commentsService from "../../../../api/Services/CommentsService/CommentsService";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";

export const fetchCommentById = createAsyncThunk< Comment | null, number, AsyncThunkConfig>(
   "commentSlice/fetchCommentById", async (commentId, thunkApi) => {
  try {
    const response = await commentsService.getCommentById(commentId);
    return response;
  } catch (error: any) {
    console.log(error);

    if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
      return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST);
    }
    return null;
  }
});
