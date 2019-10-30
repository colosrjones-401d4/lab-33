import React from 'react';
import Increment from './increment';
import Decrement from './decrement';

const Counter = (props) => {
  return (
    <>
      <Increment increment={props.increment} />
      <span style={counterStyle}>{props.count}</span>
      <Decrement decrement={props.decrement} />
      </>
  );
};

let counterStyle = {
  margin: 'auto',
  display: 'incline-block',
  fontSize: '2em',
  border: '2px solid yellow',
  borderRadius: '25%',
  textAlign: 'center',
  width: '3em',
  height: '3em',
  color: 'white',
  background: 'red',
};

export default Counter;

  