import { SET_TITLE } from "./actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TITLE:
      const title = payload.title;

      return { ...state, title };
    default:
      return state;
  }
};

export default reducer;
