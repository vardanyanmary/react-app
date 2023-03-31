import { Link, redirect, useParams } from "react-router-dom";
import { useToDo } from "../../Components/hooks/ToDoHooks/useToDo";
import "./ToDoSinglePage.scss";
import ToDoCard from "../../Components/ToDoCard/ToDoCard";

interface ToDoSinglePageProps {
  id: string;
}

const ToDoSinglePage = () => {
  const { id } = useParams<Partial<ToDoSinglePageProps>>();
  const { todo } = useToDo(Number(id));

  if (isNaN(Number(id))) {
    redirect('todos');
  }

  return (
    <div className="ToDoSinglePage">
      {todo ? (
        <>
          <ToDoCard todo={todo}/>
          <Link to={`/todos`}> Back </Link>
        </>
      ) : (
        <p> Todo not found</p>
      )}
    </div>
  );
  
};

export default ToDoSinglePage;
