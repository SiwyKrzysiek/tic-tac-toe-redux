import React from "react";
import { createStore } from "redux";
import "./App.css";

// Test action creators
const increment = (value) => {
  return {
    type: "INCREMENT",
    value: value
  };
};

const decrement = (value) => {
  return {
    type: "DECREMENT",
    value: value
  };
};

// Test reducer
const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - action.value;
    default:
      return state;
  }
};

// Test store
const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment(2));
store.dispatch(decrement(1));

function App() {
  return (
    <div className="App">
      <h1>Try your best, be weary of time!</h1>
    </div>
  );
}

export default App;
