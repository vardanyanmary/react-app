import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";
import { ToDo } from "../../../../api/Services/ToDosService/types";
import toDoService from "../../../../api/Services/ToDosService/ToDosService";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";

export const fetchToDoById = createAsyncThunk< ToDo | null, number, AsyncThunkConfig>(
  "todoSlice/fetchToDoById", async (todoId, thunkApi) => {
  try {
    const response = await toDoService.getToDoById(todoId);
    return response;
  } catch (error: any) {
    console.log(error);

    if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
      return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST);
    }
    return null;
  }
});
