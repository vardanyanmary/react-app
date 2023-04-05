import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/UI/Button/Button";
import "./CounterPage.scss";

export const CounterPage = () => {
  const state = useSelector((state) => state) as any;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
    console.log("Increment");
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
    console.log("Decrement");
  };

  return (
    <div className="CounterPage">
      <Button onClick={handleIncrement} type="secondary">
        Increment
      </Button>

      <h1>{state.counter.count}</h1>

      <Button onClick={handleDecrement} type="secondary">
        Decrement
      </Button>
    </div>
  );
};