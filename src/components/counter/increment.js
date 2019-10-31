import React, {useContext} from 'react';
import {counterContext} from './context';

const Increment = (props)=> {

  const context = useContext(counterContext); 

  return (
    <button  onClick={context.incrementCounter}> + </button>
  )
  
};

export default Increment;