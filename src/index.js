import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import CountProvider from './components/context';

class Main extends React.Component {
  render() {
    return (
      <CountProvider>
        <App />
      </CountProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));