import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../api/Services/UsersService/types";
import { api } from "../../../../api/api";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { RootState } from "../../..";
import userService from "../../../../api/Services/UsersService/UsersService";

export const fetchAllUsers = createAsyncThunk<User[], void, { state: RootState, rejectValue: ErrorMessage }>(
    'userSlice/fetchAllUsers',
    async (_, thunkApi) => {
        try {
            const response = await userService.getAllUsers()
            return response
        } catch (error: any) {
            console.log(error);

            if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
                return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST)
            }
            return []
        }
    }
)