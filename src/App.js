import React from "react";
import Counter from "./components/counter";
import Board from "./components/board";
import PlayerStatus from "./components/playersStatus";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Try your best, be weary of time!</h1>
      <Counter></Counter>
      <PlayerStatus />
      <Board />
    </div>
  );
}

export default App;
