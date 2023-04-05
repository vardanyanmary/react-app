import { useToDos } from "../../Components/hooks/ToDoHooks/useToDos";
import ToDoCard from "../../Components/ToDoCard/ToDoCard";
import "./ToDos.scss";

const ToDos = () => {
  const { todos, navigateSingleToDoPage, isLoading, error } = useToDos();

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



