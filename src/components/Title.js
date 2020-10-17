import React, { useContext } from "react";

import { setTitle } from "../actions";
import { CounterContext } from "../context";

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

export default Title;