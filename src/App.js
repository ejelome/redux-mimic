import React, { createContext, useContext, useReducer } from "react";

const ACTIONS = {
  SET_TITLE: "SET_TITLE",
  INCREMENT: "INCREMENT",
};

const initialContext = {};
const CounterContext = createContext(initialContext);

const reducer = (state, { payload, type }) => {
  const { SET_TITLE, INCREMENT } = ACTIONS;
  let { count } = state;

  switch (type) {
    case SET_TITLE:
      return { ...state, ...payload };
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

const Title = () => {
  const { SET_TITLE } = ACTIONS;
  const { state, dispatch } = useContext(CounterContext);
  const { title } = state;

  const handleSetTitle = ({ target: { value } }) =>
    dispatch({ type: SET_TITLE, payload: { title: value } });

  return (
    <>
      <input onChange={handleSetTitle} />
      <h1>{title}</h1>
    </>
  );
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
    <Title />
    <Counter />
  </CounterProvider>
);

export default App;
