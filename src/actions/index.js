
// Action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
// export const INCREMENT_AFTER_DELAY = "INCREMENT_AFTER_DELAY";

export const SET_FIELD = "SET_FIELD";

export const CHANGE_PLAYER = "CHANGE_PLAYER";

// Action creators

const setFieldToValue = (index, value) => {
  return {
    type: SET_FIELD,
    index: index,
    value: value
  };
};

export const setField = (index) => {
  return (dispatch, getState) => {
    const activePlayer = getState().activePlayer;
    const playerMarker = activePlayer === 0 ? "O" : "X";

    dispatch(setFieldToValue(index, playerMarker));
    dispatch(changePlayer());
  };
};

export const changePlayer = () => {
  return {
    type: CHANGE_PLAYER
  };
};

export const increment = (value) => {
  return {
    type: "INCREMENT",
    value: value
  };
};

export const decrement = (value) => {
  return {
    type: "DECREMENT",
    value: value
  };
};

export const incrementAfterDelay = (value, delay = 200) => {
  return (dispatch, getState) => { // thunk will inject them
    setTimeout(() => {
      dispatch(increment(value));

    }, delay);

  };
};