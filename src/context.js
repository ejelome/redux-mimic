import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

const initialContext = {};
const CounterContext = createContext(initialContext);

const initialState = { title: "hello, world", count: 0 };
const init = (initialState) => initialState;

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const { Provider } = CounterContext;
  const values = { state, dispatch };
  return <Provider value={values}>{children}</Provider>;
};

export { CounterContext, CounterProvider };
