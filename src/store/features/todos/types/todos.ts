import { ToDo } from "api/Services/ToDosService/types";
import { ErrorMessage } from "shared/constants/errorMassages";

export interface ToDosStateSchema {
  data: ToDo[];
  isLoading: boolean;
  error?: ErrorMessage;
  selectToDo ?: ToDo;
}