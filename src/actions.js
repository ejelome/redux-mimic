import { INCREMENT, SET_TITLE } from "./actionTypes";

export const setTitle = (newTitle) => ({
  type: SET_TITLE,
  payload: { title: newTitle },
});

export const increment = () => ({ type: INCREMENT });
