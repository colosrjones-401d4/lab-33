import React from 'react';
import { useContext} from 'react';
import { CounterContext } from './components/counter/context';
import Counter from './components/counter/counter';

const App = (props) => {
  const counterContext = useContext(CounterContext);

  return (
    <>
    <Counter
     count={counterContext.count}
     increment={counterContext.increment}
     decrement={counterContext.decrement}/>
     </>    
  );
};

export default App;