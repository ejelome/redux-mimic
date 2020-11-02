import { useContext } from "react";

import { Context } from "../../context";
import { setTitle } from "./actions";

const Title = () => {
  const {
    state: {
      helloWorld: { title },
    },
    dispatch,
  } = useContext(Context);

  const handleChange = ({ target: { value } }) => dispatch(setTitle(value));

  return (
    <>
      <input value={title} onChange={handleChange} />
      <h1>{title}</h1>
    </>
  );
};

export default Title;
