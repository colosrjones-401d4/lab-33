import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import CountProvider from './components/counter/context';

class Main extends React.Component {
  render() {
    return (
     <CountProvider>
      <App />
     </CountProvider>
    );
}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);