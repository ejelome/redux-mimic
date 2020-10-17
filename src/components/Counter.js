import React, { useContext } from "react";

import { decrement,increment } from "../actions";
import { CounterContext } from "../context";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  const { count } = state;

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <code>{count}</code>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default Counter;
