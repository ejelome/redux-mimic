import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
};

const reducer = (state, { type }) => {
  const { INCREMENT } = ACTIONS;
  let { count } = state;

  switch (type) {
    case INCREMENT:
      count += 1;
      return { ...state, count };
    default:
      return state;
  }
};

const initialState = { count: 0 };
const init = (initialState) => initialState;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { count } = state;

  const { INCREMENT } = ACTIONS;
  const handleIncrement = () => dispatch({ type: INCREMENT });

  return (
    <>
      <code>{count}</code>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default App;
