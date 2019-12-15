import { CHANGE_PLAYER, TIMER_TIC } from "../actions";

const initalState = {
  activePlayer: 0,
  timeLeft: 100
};

const playerReducer = (state = initalState, action) => {
  const nextPlayer = () => (state.activePlayer === 0 ? 1 : 0);

  switch (action.type) {
    case CHANGE_PLAYER:
      return {
        activePlayer: nextPlayer(),
        timeLeft: 100
      };
    case TIMER_TIC:
      if (state.timeLeft <= 0) {
        return {
          activePlayer: nextPlayer(),
          timeLeft: 100
        };
      }
      else {
        return {
          ...state,
          timeLeft: state.timeLeft - 1
        };
      }

    default:
      return state;
  }
};

export default playerReducer;