import { useState } from "react"
import { Link } from "react-router-dom"
import toDoService from "../../api/Services/ToDosService/ToDosService"
import { ToDo } from "../../api/Services/ToDosService/types"
import Button from "../../Components/UI/Button/Button"
import './ToDos.scss'

const ToDos = () => {
    const [todos, setToDos] = useState<ToDo[]>()

    const handleGetAllToDos = async () => {
        try {
            const todos = await toDoService.getAllToDos()
            setToDos(todos)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="ToDosList">
        <h2> ToDos List </h2>
  
        <div className="ToDos">
          <Button type="secondary" onClick={handleGetAllToDos}>
            Get ToDos
          </Button>
  
          {todos?.map((todo) => {
            return (
              <div key={todo.id} className="ToDoId">
                <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    )
}

export default ToDos