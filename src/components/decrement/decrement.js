import React from 'react';

import { CounterContext } from '../context/context';

class Decrement extends React.Component {
  static contextType = CounterContext;
  render() {
    return (
      <CounterContext.Consumer>
        {context => (
          <>
            <button onClick={this.context.decrementCounter}>-</button>
          </>
        )}
      </CounterContext.Consumer>
    );
  }
}

export default Decrement;