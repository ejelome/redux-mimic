import { SET_TITLE } from "./actionTypes";

export const setTitle = (newTitle) => ({
  type: SET_TITLE,
  payload: { title: newTitle },
});
