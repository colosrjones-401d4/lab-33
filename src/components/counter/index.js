import React from 'react';
import Increment from '../increment';
import Decrement from '../decrement';

const Counter = (props) => {
  return (
    <>
      <Increment increment={props.increment} />
      <span style={countStyle}>{props.count}</span>
      <Decrement decrement={props.decrement} />
    </>
  );
};

let countStyle = {
  margin: 'auto',
  display: 'inline-block',
  border: 'black',
  width: '30px',
  height: '30px',
  textAlign: 'center',
  fontSize: '2rem',
  color: 'orangered',
};

export default Counter;