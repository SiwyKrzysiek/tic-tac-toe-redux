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
        <Field key={i} value={v}></Field>
      ))}
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.arrayOf(String)
};

const mapStateToProps = (state) => {
  return {
    board: state.board
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldClikc: (i) => dispatch(setField(i, "X"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);