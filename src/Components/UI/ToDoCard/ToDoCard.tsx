import { ToDo } from "../../../api/Services/ToDosService/types";
import cls from "./ToDoCard.module.scss";

interface ToDoCardProps {
  todo: ToDo;
  navigateSingleToDoPage?: (todo: ToDo) => void;
}

const ToDoCard = ({ todo, navigateSingleToDoPage }: ToDoCardProps) => {
  if (navigateSingleToDoPage) {
    return (
      <p
        className={`${cls.ToDoCard} ${cls.withNavigation}`}
        onClick={() => navigateSingleToDoPage(todo)}
      >
        {todo.title}
      </p>
    );
  }

  return (
    <div className={cls.ToDoCard}>
      <h2>{todo.title}</h2>
    </div>
  );
};

export default ToDoCard;
