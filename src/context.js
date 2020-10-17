import React, { createContext, useReducer } from "react";

import { init, initialState } from "./initialState";
import reducer from "./reducer";

const initialContext = {};
const Context = createContext(initialContext);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const { Provider } = Context;
  const values = { state, dispatch };
  return <Provider value={values}>{children}</Provider>;
};

export { Context, Provider };
