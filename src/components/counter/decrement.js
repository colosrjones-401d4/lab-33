import React, { useContext } from "react";
import { counterContext } from "./context";

const Decrement = props => {
  const context = useContext(counterContext);

  return <button onClick={context.decrementCounter}> - </button>;
};

export default Decrement;