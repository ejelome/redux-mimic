import { DECREMENT, INCREMENT, SET_TITLE } from "./actionTypes";

const reducer = (state, { payload, type }) => {
  let { count } = state;

  switch (type) {
    case SET_TITLE:
      return { ...state, ...payload };
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
