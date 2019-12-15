import React from "react";
import PropTypes from "prop-types";
import Player from "./player";
import { connect } from "react-redux";

function PlayersStatus(props) {
  const isPlayer1Active = props.activePlayer === 0;
  const isPlayer2Active = props.activePlayer !== 0;

  return (
    <div className="d-flex justify-content-center my-3">
      <Player className="mr-auto" playerName="Player 1" isActive={isPlayer1Active} />
      <Player playerName="Player 2" isActive={isPlayer2Active} />
    </div>
  );
}

PlayersStatus.propTypes = {
  activePlayer: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activePlayer: state.players.activePlayer,
  };
};

export default connect(
  mapStateToProps
)(PlayersStatus);