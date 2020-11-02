import { SET_TITLE } from "./actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TITLE:
      return { ...state, title: payload.title };
    default:
      return state;
  }
};

export default reducer;
