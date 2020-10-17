import React, { createContext, useReducer } from "react";

import { init, initialState } from "./initialState";
import reducer from "./reducer";

const initialContext = {};
const CounterContext = createContext(initialContext);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const { Provider } = CounterContext;
  const values = { state, dispatch };
  return <Provider value={values}>{children}</Provider>;
};

export { CounterContext, CounterProvider };
