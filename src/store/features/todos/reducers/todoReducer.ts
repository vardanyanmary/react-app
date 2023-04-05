import { ToDo } from "../../../../api/Services/ToDosService/types";
import { ToDoActionTypes } from "../types/todo";

type Payload = ToDo;

interface ActionType {
  type: ToDoActionTypes;
  payload: Payload;
}

interface ToDoStateSchema {
  data: ToDo;
}

const initialState: ToDoStateSchema = {
  data: { id: 0, userId: 0, completed: false, title: "" },
};

export function todoReducer(
  state = initialState,
  action: ActionType
): ToDoStateSchema {
  switch (action.type) {
    case ToDoActionTypes.INIT_TODO:
      return { ...state, data: action.payload as ToDo };
    default:
      return state;
  }
}
