import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToDosStateSchema } from "../types/todos";
import { ToDo } from "../../../../api/Services/ToDosService/types";

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
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
    selectedComment: (state, action: PayloadAction<ToDo>) => {
        state.selectedData = action.payload
    },
  },
});

export const {
    reducer: todoReducer,
    actions : todoAction
} = todoSlice