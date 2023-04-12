import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDosStateSchema } from "../types/todos";
import { ToDo } from "../../../../api/Services/ToDosService/types";
import { fetchAllToDos } from "../model/fetchAllToDos";
import { ErrorMessage } from "../../../../constants/errorMassages";

const initialState: ToDosStateSchema = {
  data: [],
  isLoading: false,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initTodos: (state, action: PayloadAction<ToDo[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorMessage | undefined>) => {
      state.error = action.payload;
    },
    selectToDo: (state, action: PayloadAction<ToDo>) => {
      state.selectToDo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllToDos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllToDos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllToDos.rejected, (state, action) => {
        // if(action.error.code) {
        //     state.error = action.error.code;
        // }else {
        //     state.error = ErrorMessage.NOT_FOUND
        // }
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
  },
});

export const { reducer: todoReducer, actions: todoAction } = todoSlice;
