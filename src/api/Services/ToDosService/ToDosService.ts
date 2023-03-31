import { api } from "../../api";
import { ToDo } from "./types";

class ToDoService {
  async getAllToDos() {
    try {
      const res = await api.get<ToDo[]>("todos")
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  async getToDoById(id: number) {
    try {
      const res = await api.get<ToDo>(`todos/${id}`)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
}

const toDoService = new ToDoService()

export default toDoService
