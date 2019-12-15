
// Action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
// export const INCREMENT_AFTER_DELAY = "INCREMENT_AFTER_DELAY";

// Action creators
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
  return (dispatch, state) => { // thunk will inject them
    setTimeout(() => {
      dispatch(increment(value));

    }, delay);

  };
};