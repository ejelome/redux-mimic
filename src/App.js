import React, { createContext, useContext, useReducer } from "react";

import { increment, setTitle } from "./actions";
import reducer from "./reducer";

const initialContext = {};
const CounterContext = createContext(initialContext);

const initialState = { count: 0 };
const init = (initialState) => initialState;

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const { Provider } = CounterContext;
  const values = { state, dispatch };
  return <Provider value={values}>{children}</Provider>;
};

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
