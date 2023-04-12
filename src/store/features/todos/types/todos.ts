import { ToDo } from "../../../../api/Services/ToDosService/types";
import { ErrorMessage } from "../../../../constants/errorMassages";

export interface ToDosStateSchema {
  data: ToDo[];
  isLoading: boolean;
  error?: ErrorMessage;
  selectToDo ?: ToDo;
}