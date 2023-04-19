import { useEffect } from "react";
import { useToDos } from "Components/hooks/useToDos";
import ToDoCard from "Components/UI/ToDoCard/ToDoCard";
import cls from "./ToDos.module.scss";

const ToDos = () => {
  const { todos, navigateSingleToDoPage, isLoading, error, getAllToDos } = useToDos();

  useEffect(() => {
    if (!todos.length) {
        getAllToDos()
    }
}, [getAllToDos, todos])

  if (isLoading) {
    return <div className={cls.ToDosPage}>Loading...</div>;
  }

  if (error) {
    return <div className={cls.ToDosPage}>{error}</div>;
  }

  return (
    <div className={cls.ToDosList}>
      <h2> ToDos List </h2>
      <div className={cls.ToDos}>
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



