import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { ToDo } from "../../../../api/Services/ToDosService/types";
import toDoService from "../../../../api/Services/ToDosService/ToDosService";

export const fetchToDoById = createAsyncThunk<
  ToDo | null,
  number,
  { state: RootState; rejectValue: ErrorMessage }
>("todoSlice/fetchToDoById", async (todoId, thunkApi) => {
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
