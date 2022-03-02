import React from "react";
import Button from "./components/Button";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div className="App">
        <p className="count">{this.state.counter}</p>
        <p>Steps</p>
        <Button name="Increment" />
        <Button name="Decrement" />
        <Button name="Reset" />
      </div>
    );
  }
}

export default App;
