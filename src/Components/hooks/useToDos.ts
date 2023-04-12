import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toDoService from "../../api/Services/ToDosService/ToDosService";
import { useSelector } from "react-redux";
import { getSelectedToDo, getToDosData, getToDosError, getToDosLoading } from "../../store/features/todos/selectors/todos";
import { ToDo } from "../../api/Services/ToDosService/types";
import { todoAction } from "../../store/features/todos/todoSlice/todoSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchAllToDos } from "../../store/features/todos/model/fetchAllToDos";

export function useToDos() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const data = useSelector(getToDosData);
  const isLoading = useSelector(getToDosLoading);
  const error = useSelector(getToDosError);
  const selectedData = useSelector(getSelectedToDo);

  const getAllToDos = useCallback(() => {
    dispatch(fetchAllToDos())
    // dispatch(todoAction.setLoading(true));
    // dispatch(todoAction.setError(undefined));
    // try {
    //   const todos = await toDoService.getAllToDos();
    //   dispatch(todoAction.initTodos(todos));
    // } catch (error) {
    //   console.warn(error);
    //   dispatch(todoAction.setError("error massage"));
    // } finally {
    //   dispatch(todoAction.setLoading(false));
    // }
  }, [dispatch]);

  const selectToDo = useCallback(
    (todo: ToDo) => {
      dispatch(todoAction.selectToDo(todo));
    },
    [dispatch]
  );

  const navigateSingleToDoPage = useCallback(
    (todo: ToDo) => {
      navigate(`${todo.id}`);
      selectToDo(todo);
    },
    [navigate]
  );

  const getToDo = useCallback(
    async (todoId: number) => {
      dispatch(todoAction.setLoading(true));
      try {
        const todo = await toDoService.getToDoById(todoId);
        selectToDo(todo);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(todoAction.setLoading(false));
      }
    },
    [dispatch, selectToDo]
  );

  return {
    todos: data,
    navigateSingleToDoPage,
    isLoading,
    error,
    selectedData,
    getToDo,
    getAllToDos,
  };
}
