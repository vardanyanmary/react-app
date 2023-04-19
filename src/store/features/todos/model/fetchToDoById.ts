import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDo } from "api/Services/ToDosService/types";
import toDoService from "api/Services/ToDosService/ToDosService";
import { AsyncThunkConfig } from "shared/types/asyncThunkConfig";
import { errorHandler } from "shared/utils/errorHandler";

export const fetchToDoById = createAsyncThunk< ToDo | null, number, AsyncThunkConfig>(
  "todoSlice/fetchToDoById", async (todoId, thunkApi) => {
  try {
    const response = await toDoService.getToDoById(todoId);
    return response;
  } catch (error: any) {
    return errorHandler(error , thunkApi)
  }
});
