import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toDoService from "../../api/Services/ToDosService/ToDosService";
import { ToDo } from "../../api/Services/ToDosService/types";
import "./ToDoSinglePage.scss";

const ToDoSinglePage = () => {
  const { todoId } = useParams<{ todoId: string }>();
  const [todo, setToDo] = useState<ToDo>();

  useEffect(() => {
    const singleToDo = async () => {
      const todo = await toDoService.getToDoById(Number(todoId));
      setToDo(todo);
    };
    singleToDo();
  }, [todoId]);

  return (
    <div className="ToDoSinglePage">
      {todo ? (
        <>
          <div>
            <h2>{todo.id}</h2>
            <p>{todo.title}</p>
            <Link to={`/todos`}> Back </Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ToDoSinglePage;
