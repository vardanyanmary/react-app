import { ToDo } from "../../../../api/Services/ToDosService/types";
import { ToDoActionTypes } from "../types/todo";

export const initToDoAction = (payload: ToDo | undefined) => ({
    type: ToDoActionTypes.INIT_TODO,
    payload
})