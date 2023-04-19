import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersStateSchema } from "../types/users";
import { User } from "api/Services/UsersService/types";
import { fetchAllUsers } from "../model/fetchAllUsers";
import { fetchUserById } from "../model/fetchUserById";
import { ErrorMessage } from "shared/constants/errorMassages";

const initialState: UsersStateSchema = {
  data: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    initUser: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorMessage | undefined>) => {
      state.error = action.payload;
    },
    selectUser: (state, action: PayloadAction<User>) => {
      state.selectUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectUser = action.payload as User;
        state.isLoading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.payload as ErrorMessage;
        state.isLoading = false;
      });
  },
});

export const { reducer: userReducer, actions: userAction } = userSlice;
