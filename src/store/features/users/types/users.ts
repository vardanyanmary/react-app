import { User } from "api/Services/UsersService/types";
import { ErrorMessage } from "shared/constants/errorMassages";

export interface UsersStateSchema {
    data: User[];
    isLoading: boolean;
    error?: ErrorMessage;
    selectUser ?: User;
  }