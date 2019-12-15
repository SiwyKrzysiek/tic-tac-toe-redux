import React from "react";
import PropTypes from "prop-types";
import "../styles/gameField.css";

function Fileld(props) {
  return (
    <div className="game-field">{props.value}</div>
  );
}

Fileld.propTypes = {
  value: PropTypes.string
};

export default Fileld;