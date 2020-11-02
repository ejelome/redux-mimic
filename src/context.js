import { createContext, useReducer } from "react";

import helloWorldState from "./components/hello-world/initialState";
import helloWorldReducer from "./components/hello-world/reducer";
import { combineReducers, combineStates, init } from "./utils";

const initialStates = {
  helloWorld: helloWorldState,
};

const reducers = combineReducers({
  helloWorld: helloWorldReducer,
});

const Context = createContext({});

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducers, initialStates, init);
  const values = { state, dispatch };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export { Context, Provider };
