import React from "react";
import Counter from "./components/counter";
import Board from "./components/board";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Try your best, be weary of time!</h1>
      <Counter></Counter>
      <Board></Board>
    </div>
  );
}

export default App;
