import React from "react";
import PropTypes from "prop-types";
import "../styles/gameField.css";

function Fileld(props) {
  return (
    <div className="game-field" onClick={props.onClick}>{props.value}</div>
  );
}

Fileld.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Fileld;