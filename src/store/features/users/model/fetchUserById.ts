import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../api/Services/UsersService/types";
import userService from "../../../../api/Services/UsersService/UsersService";
import { AsyncThunkConfig } from "../../../../shared/types/asyncThunkConfig";
import { errorHandler } from "../../../../shared/utils/errorHandler";

export const fetchUserById= createAsyncThunk<User | null, number, AsyncThunkConfig>(
    'userSlice/fetchUserById',
    async (userId, thunkApi) => {
        try {
            const response = await userService.getUserById(userId)
            return response
        } catch (error: any) {
            return errorHandler(error , thunkApi)
        }
    }
)