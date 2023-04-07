import { ToDo } from "../../../../api/Services/ToDosService/types";
import { ToDosActionTypes } from "../types/todos";

type Payload = ToDo | ToDo[] | boolean | string;

interface ActionType {
  type: ToDosActionTypes;
  payload: Payload;
}

interface ToDosStateSchema {
  data: ToDo[];
  isLoading: boolean;
  error?: string;
  selectedData?: ToDo;
}

const initialState: ToDosStateSchema = {
  data: [],
  isLoading: false,
};

export function todosReducer(
  state = initialState,
  action: ActionType
): ToDosStateSchema {
  switch (action.type) {
    case ToDosActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload as boolean };
    case ToDosActionTypes.INIT_TODOS:
      return { ...state, data: action.payload as ToDo[] };
    case ToDosActionTypes.SELECTED_TODO:
      return { ...state, selectedData: action.payload as ToDo };
    case ToDosActionTypes.SET_ERROR:
      return { ...state, error: action.payload as string };
    default:
      return state;
  }
}
