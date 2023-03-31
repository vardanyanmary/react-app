import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toDoService from "../../api/Services/ToDosService/ToDosService";
import { ToDo } from "../../api/Services/ToDosService/types";
import "./ToDoSinglePage.scss";

const ToDoSinglePage = () => {
  const { todoId } = useParams<{ todoId: string }>();
  const [todo, setToDo] = useState<ToDo>();
  const singleToDo = async () => {
    const todo = await toDoService.getToDoById(Number(todoId));
    if (todo) {
      setToDo(todo);
    }
  };
  useEffect(() => {
    singleToDo();
  }, [todoId]);

  if (!todo) {
    return (
      <div className="ToDoSinglePage">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="ToDoSinglePage">
      <div>
        <h2>{todo.id}</h2>
        <p>{todo.title}</p>
        <Link to={`/todos`}> Back </Link>
      </div>
    </div>
  );
};

export default ToDoSinglePage;
