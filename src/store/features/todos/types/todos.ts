import { ToDo } from "../../../../api/Services/ToDosService/types";

export interface ToDosStateSchema {
  data: ToDo[];
  isLoading: boolean;
  error?: string;
  selectToDo ?: ToDo;
}