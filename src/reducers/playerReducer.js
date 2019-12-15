import { CHANGE_PLAYER } from "../actions";

const initalState = 0;

const playerReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return state === 0 ? 1 : 0;
    default:
      return state;
  }
};

export default playerReducer;