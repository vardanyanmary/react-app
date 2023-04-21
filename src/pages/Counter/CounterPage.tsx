import { useDispatch, useSelector } from "react-redux";
import cls from "./CounterPage.module.scss";
import { Button } from "@mui/material";

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
    <div className={cls.CounterPage}>
      <Button onClick={handleIncrement} variant="outlined">
        Increment
      </Button>

      {/* <h1>{state.counter.count}</h1> */}
      <h1>{0}</h1>

      <Button onClick={handleDecrement} variant="outlined">
        Decrement
      </Button>
    </div>
  );
};
