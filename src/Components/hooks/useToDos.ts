import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toDoService from "../../api/Services/ToDosService/ToDosService";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedToDo,
  getToDosData,
  getToDosError,
  getToDosLoading,
} from "../../store/features/todos/selectors/todos";
import {
  initToDosAction,
  selectedToDoAction,
  setGetAllToDosErrorAction,
  setLoading,
} from "../../store/features/todos/actions/todosActions";
import { ToDo } from "../../api/Services/ToDosService/types";

export function useToDos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getToDosData);
  const isLoading = useSelector(getToDosLoading);
  const error = useSelector(getToDosError);
  const selectedData = useSelector(getSelectedToDo);

  const getAllToDos = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setGetAllToDosErrorAction(undefined));
    try {
      const todos = await toDoService.getAllToDos();
      dispatch(initToDosAction(todos));
    } catch (error) {
      console.warn(error);
      dispatch(setGetAllToDosErrorAction("error massage"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const selectToDo = useCallback(
    (todo: ToDo) => {
      dispatch(selectedToDoAction(todo));
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
      dispatch(setLoading(true));
      try {
        const todo = await toDoService.getToDoById(todoId);
        selectToDo(todo);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoading(false));
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
