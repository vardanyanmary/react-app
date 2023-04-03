import { useCallback, useState, useEffect } from "react";
import { ToDo } from "../../../api/Services/ToDosService/types";
import toDoService from "../../../api/Services/ToDosService/ToDosService";

export function useToDo(todoId: number) {
  const [todo, setToDo] = useState<ToDo>();

  const getToDo = useCallback(async (todoId: number) => {
    try {
      const todo = await toDoService.getToDoById(todoId);
      setToDo(todo);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getToDo(todoId);
  }, [getToDo, todoId]);

  return {
    getToDo,
    todo,
  };
}
