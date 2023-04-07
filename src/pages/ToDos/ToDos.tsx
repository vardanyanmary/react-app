import { useEffect } from "react";
import { useToDos } from "../../Components/hooks/useToDos";
import ToDoCard from "../../Components/ToDoCard/ToDoCard";
import "./ToDos.scss";

const ToDos = () => {
  const { todos, navigateSingleToDoPage, isLoading, error, getAllToDos } = useToDos();

  useEffect(() => {
    if (!todos.length) {
        getAllToDos()
    }
}, [getAllToDos, todos])

  if (isLoading) {
    return <div className="ToDosPage">Loading...</div>;
  }

  if (error) {
    return <div className="ToDosPage">{error}</div>;
  }

  return (
    <div className="ToDosList">
      <h2> ToDos List </h2>
      <div className="ToDos">
        {todos?.map((todo) => (
          <ToDoCard
            todo={todo}
            key={todo.id}
            navigateSingleToDoPage={navigateSingleToDoPage}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDos;



