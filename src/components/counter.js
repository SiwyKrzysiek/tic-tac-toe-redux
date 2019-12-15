import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increment, decrement, incrementAfterDelay } from "../actions";

function Counter(props) {

  return (
    <>
      <h4>{props.counter}</h4>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrenent</button>
      <button onClick={props.onDelayedIncrement}>+10 after while</button>
    </>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDelayedIncrement: PropTypes.func
};

const mapStateToProps = (state) => (
  {
    counter: state.counter
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onIncrement: () => dispatch(increment(1)),
    onDecrement: () => dispatch(decrement(5)),
    onDelayedIncrement: () => dispatch(incrementAfterDelay(10, 1000))
  }
);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);