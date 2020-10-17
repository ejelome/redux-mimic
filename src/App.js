import React, { createContext, useContext, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
};

const initialContext = {};
const CounterContext = createContext(initialContext);

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

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const { Provider } = CounterContext;
  const values = { state, dispatch };
  return <Provider value={values}>{children}</Provider>;
};

const Counter = () => {
  const { INCREMENT } = ACTIONS;
  const { state, dispatch } = useContext(CounterContext);
  const { count } = state;

  const handleIncrement = () => dispatch({ type: INCREMENT });

  return (
    <>
      <code>{count}</code>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;
