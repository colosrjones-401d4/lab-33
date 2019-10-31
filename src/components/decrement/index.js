import React from 'react';

const Decrement = (props) => {
  return (
    <button style={style} onClick={props.decrement}>
      -
    </button>
  );
};

let style = {
  margin: 'auto',
  display: 'inline-block',
  width: '30px',
  height: '30px',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: 'black',
  color: 'white'
};

export default Decrement;