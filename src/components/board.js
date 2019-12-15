import React from "react";
import { connect } from "react-redux";
import { setField } from "../actions";
import PropTypes from "prop-types";
import Field from "./field";
import "../styles/board.css";

function Board(props) {
  return (
    <div className="game-board">
      {props.board.map((v, i) => (
        <Field key={i} value={v}
          onClick={() => props.onFieldClikc(i)}></Field>
      ))}
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.arrayOf(String),
  onFieldClikc: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldClikc: (i) => dispatch(setField(i, "X")) // TODO: Change to active player
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);