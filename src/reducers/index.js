import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import boardReducer from "./boardReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  counter: counterReducer,
  board: boardReducer,
  activePlayer: playerReducer
});