import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toDoService from "../../../api/Services/ToDosService/ToDosService";
import { useDispatch, useSelector } from "react-redux";
import {
  getToDosData,
  getToDosError,
  getToDosLoading,
} from "../../../store/features/todos/selectors/todos";
import {
  initToDosAction,
  setGetAllToDosErrorAction,
  setLoading,
} from "../../../store/features/todos/actions/todosActions";

export function useToDos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getToDosData);
  const isLoading = useSelector(getToDosLoading);
  const error = useSelector(getToDosError);

  const getAllToDos = useCallback(async () => {

    dispatch(setLoading(true));
    dispatch(setGetAllToDosErrorAction(undefined));

    try {
      const todos = await toDoService.getAllToDos();
      dispatch(initToDosAction(todos));
      // console.log(todos);
    } catch (error) {
      console.warn(error);
      dispatch(setGetAllToDosErrorAction("error massage"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const navigateSingleToDoPage = useCallback(
    (todoId: number) => {
      // console.log(todoId, 'todoId');
      navigate(`${todoId}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (!data.length) {
      getAllToDos();
    }
  }, [getAllToDos, data]);

  return {
    todos: data,
    navigateSingleToDoPage,
    isLoading,
    error,
  };
}
