import { Link, redirect, useParams } from "react-router-dom";
import "./ToDoSinglePage.scss";
import ToDoCard from "../../Components/ToDoCard/ToDoCard";
import { useToDos } from "../../Components/hooks/useToDos";
import { useEffect } from "react";
import { error } from "console";

interface ToDoSinglePageProps {
  id: string;
}

const ToDoSinglePage = () => {
  const { id } = useParams<Partial<ToDoSinglePageProps>>();
  const { selectedData, getToDo, isLoading, error } = useToDos();

  if (isNaN(Number(id))) {
    redirect("todos");
  }

  useEffect(() => {
    if (!selectedData) {
      getToDo(Number(id));
    }
  }, [getToDo, id, selectedData]);

  if (error) {
    return <div className="ToDosPage">{error}</div>;
  }
  return (
    <div className="ToDoSinglePage">
      {!isLoading && selectedData ? (
        <>
          <ToDoCard todo={selectedData} />
          <Link to={`/todos`}> Back </Link>
        </>
      ) : (
        <p> Loading ... </p>
      )}
    </div>
  );
};

export default ToDoSinglePage;
