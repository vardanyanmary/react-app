import { ToDo } from "../../api/Services/ToDosService/types";
import "./ToDoCard.scss";

interface ToDoCardProps {
  todo: ToDo;
  navigateSingleToDoPage?: (todo: ToDo) => void;
}

const ToDoCard = ({ todo, navigateSingleToDoPage }: ToDoCardProps) => {
  
    if (navigateSingleToDoPage) {
        return (
          <p
            className="ToDoCard withNavigation"
            onClick={() => navigateSingleToDoPage(todo)}
          >
            {todo.title}
          </p>
        );
      }
  
    return (
    <div className="ToDoCard">
      <h2>{todo.title}</h2>
    </div>
  );
};

export default ToDoCard;
