import React from "react";
import PropTypes from "prop-types";
import Player from "./player";

function PlayersStatus(props) {
  return (
    <div className="d-flex justify-content-center my-3">
      <Player className="mr-auto" playerName="Player 1" isActive={true} />
      <Player playerName="Player 2" isActive={false} />
    </div>
  );
}

export default PlayersStatus;