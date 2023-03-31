import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toDoService from "../../../api/Services/ToDosService/ToDosService";
import { ToDo } from "../../../api/Services/ToDosService/types";

export function useToDos() {

  const navigate = useNavigate()
  const [todos, setToDos] = useState<ToDo[]>()

  const getAllToDos = useCallback(async () => {
    try {
      const todos = await toDoService.getAllToDos();
      setToDos(todos);
    } catch (error) {
      console.error(error)
    }
  }, []);

  const navigateSingleToDoPage = useCallback((todoId: number) => {
    // console.log(todoId, 'todoId');
    navigate(`${todoId}`)
}, [navigate])

useEffect(() => {
    getAllToDos()
}, [])

  return{
    todos,
    navigateSingleToDoPage,
  }
}
