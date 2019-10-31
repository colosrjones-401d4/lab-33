import React from 'react';

import CounterContext from './components/context/context';
import Counter from './components/counter/counter';
import Incrementer from './components/increment/increment';
import Decrementer from './components/decrement/decrement';



class App extends React.Component {
  render() {
    return (
      <>
        <CounterContext>
          <div className='stylecounter'>
          <Decrementer />
          <Counter />
          <Incrementer />
          </div>
        </CounterContext>
      </>
    );
  }
}

export default App;