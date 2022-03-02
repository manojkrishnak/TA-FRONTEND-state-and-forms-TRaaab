import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5,
      steps: 0,
      maxValue: Infinity,
    };
  }

  handleIncrement = () => {
    if (this.state.counter < this.state.maxValue) {
      if (this.state.steps !== 0) {
        this.setState({
          counter: this.state.counter + this.state.steps,
        });
      } else {
        this.setState({
          counter: this.state.counter + 1,
        });
      }
    }
  };

  handleDecrement = () => {
    if (this.state.counter <= this.state.maxValue) {
    if (this.state.steps !== 0) {
      this.setState({
        counter: this.state.counter - this.state.steps,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
}

  handleReset = () => {
    this.setState({
      counter: 0,
      steps: 0,
    });
  };

  handleStep = (num) => {
    if (this.state.steps === num) {
      this.setState({
        steps: 0,
      });
    } else {
      this.setState({
        steps: num,
      });
    }
  };

  handleMaxvalue = (num) => {
    if (this.state.maxValue === num) {
      this.setState({
        maxValue: Infinity,
      });
    } else {
      this.setState({
        maxValue: num,
      });
    }
  };

  render() {
    return (
      <div className="App container">
        <p className="count">{this.state.counter}</p>
        <p>Steps</p>
        <div className="flex justify-bt">
          <div className="steps">
            {[5, 10, 15].map((num, i) => (
              <button
                key={i}
                onClick={() => this.handleStep(num)}
                className={this.state.steps === num ? "active" : ""}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="maxvalue">
            {[15, 100, 200].map((num, i) => (
              <button
                key={i}
                onClick={() => this.handleMaxvalue(num)}
                className={this.state.maxValue === num ? "active" : ""}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </div>
    );
  }
}

export default App;
