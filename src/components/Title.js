import React, { useContext } from "react";

import { CounterContext } from "../context";

const Title = () => {
  const { state } = useContext(CounterContext);
  const { title } = state;
  return <h1>{title}</h1>;
};

export default Title;
