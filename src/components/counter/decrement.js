import React from 'react';

const Decrement = (props) => {
  return (
    <button style={style} onClick={props.decrement}>-</button>
  );
};

let style = {
  margin: 'auto',
  display: 'incline-block',
  fontSize: '2em',
  border: '2px solid yellow',
  borderRadius: '25%',
  textAlign: 'center',
  width: '2em',
  height: '2em',
  color: 'white',
  background: 'black',
};

export default Decrement;