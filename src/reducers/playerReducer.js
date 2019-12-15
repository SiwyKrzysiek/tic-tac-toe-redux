import { CHANGE_PLAYER } from "../actions";

const initalState = {
  activePlayer: 0,
  timeLeft: 80
};

const playerReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return {
        ...state,
        activePlayer: state.activePlayer === 0 ? 1 : 0
      };
    default:
      return state;
  }
};

export default playerReducer;