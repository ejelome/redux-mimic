import React, { useContext } from "react";

import { increment } from "./actions";
import Title from "./components/Title";
import { CounterContext, CounterProvider } from "./context";

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
