import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDosStateSchema } from "../types/todos";
import { ToDo } from "../../../../api/Services/ToDosService/types";
import { fetchAllToDos } from "../model/fetchAllToDos";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { fetchToDoById } from "../model/fetchToDoById";

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
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
    builder
      .addCase(fetchToDoById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchToDoById.fulfilled, (state, action) => {
        state.selectToDo = action.payload as ToDo;
        state.isLoading = false;
      })
      .addCase(fetchToDoById.rejected, (state, action) => {
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
  },
});

export const { reducer: todoReducer, actions: todoAction } = todoSlice;
