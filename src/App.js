import React from "react";
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


function App() {
  return (
    <div className="App">
      <h1>Try your best, be weary of time!</h1>
    </div>
  );
}

export default App;
