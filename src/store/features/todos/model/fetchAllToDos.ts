import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDo } from "api/Services/ToDosService/types";
import toDoService from "api/Services/ToDosService/ToDosService";
import { AsyncThunkConfig } from "shared/types/asyncThunkConfig";
import { errorHandler } from "shared/utils/errorHandler";

export const fetchAllToDos = createAsyncThunk<ToDo[], void, AsyncThunkConfig >(
    'todoSlice/fetchAllToDos',
    async (_, thunkApi) => {
        try {
            const response = await toDoService.getAllToDos()
            return response
        } catch (error: any) {
            return errorHandler(error , thunkApi)

                 // return thunkApi.rejectWithValue(error)

        }
    }
)