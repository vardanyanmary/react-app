import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../../api/Services/UsersService/types";
import { ErrorMessage } from "../../../../constants/errorMassages";
import { RootState } from "../../..";
import userService from "../../../../api/Services/UsersService/UsersService";

export const fetchUserById= createAsyncThunk<User | null, number, { state: RootState, rejectValue: ErrorMessage }>(
    'userSlice/fetchUserById',
    async (userId, thunkApi) => {
        try {
            const response = await userService.getUserById(userId)
            return response
        } catch (error: any) {
            console.log(error);

            if (error.code === ErrorMessage.ERR_BAD_REQUEST) {
                return thunkApi.rejectWithValue(ErrorMessage.ERR_BAD_REQUEST)
            }
            return null
        }
    }
)