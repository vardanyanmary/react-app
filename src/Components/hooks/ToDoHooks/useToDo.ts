import { useCallback, useEffect } from "react";
import toDoService from "../../../api/Services/ToDosService/ToDosService";
import { useDispatch, useSelector } from "react-redux";
import { getToDoData } from "../../../store/features/todos/selectors/todo";
import { initToDoAction } from "../../../store/features/todos/actions/todoActions";

export function useToDo(todoId: number) {
  const dispatch = useDispatch();
  const data = useSelector(getToDoData);

  const getToDo = useCallback(async (todoId: number) => {
    try {
      const todo = await toDoService.getToDoById(todoId);
      dispatch(initToDoAction(todo))
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!data.id || data.id !== todoId) {
    getToDo(todoId);
    }
  }, [getToDo, todoId, data.id]);

  return {
    getToDo,
    todo: data,
  };
}
