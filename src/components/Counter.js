import React, { useContext } from "react";

import { decrement, increment } from "../actions";
import { Context } from "../context";

const Counter = () => {
  const { state, dispatch } = useContext(Context);
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
