import { SET_FIELD } from "../actions";


const initalState = Array(9).fill("");

const boardReducer = (state = initalState, action) => {
  const { type, index, value } = action;

  if (type !== SET_FIELD)
    return state;

  if (state[index] !== "")
    return state; // Can't change value of taken field

  return state.map((v, i) => (i === index ? value : v));
};

export default boardReducer;