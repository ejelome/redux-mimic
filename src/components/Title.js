import React, { useContext } from "react";

import { setTitle } from "../actions";
import { Context } from "../context";

const Title = () => {
  const { state, dispatch } = useContext(Context);
  const { title } = state;

  const handleChange = ({ target: { value } }) => dispatch(setTitle(value));

  return (
    <>
      <input onChange={handleChange} />
      <h1>{title}</h1>
    </>
  );
};

export default Title;
