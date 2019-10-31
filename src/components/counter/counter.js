import React from 'react';

import { CounterContext } from '../context/context';

class Counter extends React.Component {
  static contextType = CounterContext;
  render() {
    return (
      <CounterContext.Consumer>
        {context => (
          <>
            <span>{this.context.count}</span>
          </>
        )}
      </CounterContext.Consumer>
    );
  }
}

export default Counter;
