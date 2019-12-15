
// Action types
export const ADD_TODO = "INCREMENT";
export const TOGGLE_TODO = "DECREMENT";

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