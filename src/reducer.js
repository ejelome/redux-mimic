import { DECREMENT, INCREMENT } from "./actionTypes";

const reducer = (state, { payload, type }) => {
  let { count } = state;

  switch (type) {
    case INCREMENT:
      count += 1;
      return { ...state, count };
    case DECREMENT:
      count -= 1;
      return { ...state, count };
    default:
      return state;
  }
};

export default reducer;
