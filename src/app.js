import React from "react";
import Counter from "./components/counter/counter";
import Increment from "./components/counter/increment.js";
import Decrement from "./components/counter/decrement.js";

export default class App extends React.Component {
  

  render() {
    return (
      <>
        <Decrement decrementCounter={this.decrementCounter} />
        <Counter banana={this.state} />
        <Increment incrementCounter={this.incrementCounter} />
      </>
    );
  }
}