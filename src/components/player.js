import React from "react";
import PropTypes from "prop-types";

function Player(props) {

  return (
    <div className="d-inline-flex flex-column align-items-center px-2" style={{ width: "200px" }}>
      <h3>{props.playerName}</h3>
      {props.isActive &&
        <div className="progress" style={{ width: "100%" }}>
          <div className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100"
            style={{ width: "75%" }}>
          </div>
        </div>
      }

    </div >
  );
}

Player.propTypes = {
  playerName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Player;