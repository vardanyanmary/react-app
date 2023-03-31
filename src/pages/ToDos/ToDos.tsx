import { useToDos } from "../../Components/hooks/ToDoHooks/useToDos";
import ToDoCard from "../../Components/ToDoCard/ToDoCard";
import "./ToDos.scss";

const ToDos = () => {
  const { todos, navigateSingleToDoPage } = useToDos();

  if (!todos) {
    return <p className="todosP"> Loading... </p>
  }

  return (
    <div className="ToDosList">
      <h2> ToDos List </h2>

      <div className="ToDos">
        {/* <Button type="secondary" onClick={handleGetAllToDos}> Get ToDos </Button> */}
        {todos.map((todo) => {
          return (
            <ToDoCard
              todo={todo}
              key={todo.id}
              navigateSingleToDoPage={navigateSingleToDoPage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDos;
