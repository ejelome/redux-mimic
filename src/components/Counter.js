import React, { useContext } from "react";

import { increment } from "../actions";
import { CounterContext } from "../context";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  const { count } = state;

  const handleIncrement = () => dispatch(increment());

  return (
    <>
      <code>{count}</code>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default Counter;
