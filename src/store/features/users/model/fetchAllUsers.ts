import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../api/Services/UsersService/types";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";
import userService from "../../../../api/Services/UsersService/UsersService";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";
import { errorHandler } from "../../../../shared/utils/errorHandler";

export const fetchAllUsers = createAsyncThunk<User[], void, AsyncThunkConfig >(
    'userSlice/fetchAllUsers',
    async (_, thunkApi) => {
        try {
            const response = await userService.getAllUsers()
            return response
        } catch (error: any) {
            return errorHandler(error , thunkApi)
        }
    }
)