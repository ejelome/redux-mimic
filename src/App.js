import React, { useContext } from "react";

import { increment, setTitle } from "./actions";
import { CounterContext, CounterProvider } from "./context";

const Title = () => {
  const { state, dispatch } = useContext(CounterContext);
  const { title } = state;

  const handleSetTitle = ({ target: { value } }) => dispatch(setTitle(value));

  return (
    <>
      <input onChange={handleSetTitle} />
      <h1>{title}</h1>
    </>
  );
};

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

const App = () => (
  <CounterProvider>
    <Title />
    <Counter />
  </CounterProvider>
);

export default App;
