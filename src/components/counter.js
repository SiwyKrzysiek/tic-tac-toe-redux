import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increment, decrement } from "../actions";

function Counter(props) {

  return (
    <>
      <h4>{props.counter}</h4>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrenent</button>
    </>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    counter: state.counter
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onIncrement: () => dispatch(increment(1)),
    onDecrement: () => dispatch(decrement(5))
  }
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);