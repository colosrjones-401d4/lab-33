import React from "react";

import { CounterContext } from '../context/context';

class Increment extends React.Component {
  static contextType = CounterContext;
  render() {
    return (
      <CounterContext.Consumer>
        {context => (
          <>
            <button onClick={this.context.incrementCounter}>+</button>
          </>
        )}
      </CounterContext.Consumer>
    );
  }
}

export default Increment;