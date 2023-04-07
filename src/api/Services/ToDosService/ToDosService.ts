import { api } from "../../api";
import { ToDo } from "./types";

class ToDoService {
  async getAllToDos() {
      const res = await api.get<ToDo[]>("todos")
      return res.data
  }

  async getToDoById(id: number) {
      const res = await api.get<ToDo>(`todos/${id}`)
      return res.data
    }
}

const toDoService = new ToDoService()

export default toDoService
